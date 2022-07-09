import p, { strict } from '@mumingpo/primate';
import validator from 'validator';

import type { JsonWebKey } from 'crypto';

import errorResponses from '../errorResponses';

const STRONG_PASSWORD_REQUIREMENTS: validator.strongPasswordOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 0,
};

const lowercasingCodec = p.primitive(
  (s: string) => (s),
  (unk: unknown) => {
    if (typeof unk !== 'string') {
      throw new Error('lowercasingCodec can only deserialize strings');
    }
    return unk.toLowerCase();
  },
  'lowercasingCodec',
);

const usernameSerializer = (s: string) => (s);
const usernameDeserializer = (unk: unknown) => {
  if (typeof unk !== 'string') {
    throw errorResponses.IncorrectUsernameFormat;
  }
  if (!(/^[A-Za-z][A-Za-z0-9]{5,29}$/.test(unk))) {
    throw errorResponses.IncorrectUsernameFormat;
  }
  return unk.toLowerCase();
};
const usernameCodec = p.primitive(usernameSerializer, usernameDeserializer, 'usernameCodec');

const emailSerializer = (s: string) => (s);
const emailDeserializer = (unk: unknown) => {
  if (typeof unk !== 'string') {
    throw errorResponses.IncorrectEmailFormat;
  }
  if (!validator.isEmail(unk)) {
    throw errorResponses.IncorrectEmailFormat;
  }
  return unk.toLowerCase();
};
const emailCodec = p.primitive(emailSerializer, emailDeserializer, 'emailCodec');

const passwordSerializer = (s: string) => (s);
const passwordDeserializer = (unk: unknown) => {
  if (typeof unk !== 'string') {
    throw errorResponses.IncorrectPasswordFormat;
  }
  if (!validator.isStrongPassword(unk, STRONG_PASSWORD_REQUIREMENTS)) {
    throw errorResponses.IncorrectPasswordFormat;
  }
  return unk;
};
const passwordCodec = p.primitive(passwordSerializer, passwordDeserializer, 'passwordCodec');

const jwkSerializer = (key: JsonWebKey) => (key);
// no good way to typecheck it, defer it until importkey.
const jwkDeserializer = (unk: unknown) => (unk as JsonWebKey);
const jwkCodec = p.primitive(
  jwkSerializer,
  jwkDeserializer,
  'jwkCodec',
);

// NAU = Not An Update, so it is permissible to use a less strict type.
const userCodec = p.object({
  username: usernameCodec,
  email: emailCodec,
  key: jwkCodec,
});

const emailBodyCodec = p.object({
  email: emailCodec,
});

const usernameBodyCodec = p.object({
  username: usernameCodec,
});

const usernameLoginCodec = p.object({
  username: lowercasingCodec, // NAU, but need lowercasing
  password: strict.stringCodec, // NAU
});

const emailLoginCodec = p.object({
  email: lowercasingCodec, // NAU, but need lowercasing
  password: strict.stringCodec, // NAU
});

const accountInitializationCodec = p.object({
  token: strict.stringCodec, // NAU
  email: lowercasingCodec, // NAU, but need lowercasing
  username: usernameCodec,
  password: passwordCodec,
});

const passwordResetCodec = p.object({
  token: strict.stringCodec, // NAU
  email: lowercasingCodec, // NAU, but need lowercasing
  newPassword: passwordCodec,
});

const changePasswordCodec = p.object({
  oldPassword: strict.stringCodec, // NAU
  newPassword: passwordCodec,
});

export {
  userCodec,
  emailBodyCodec,
  usernameBodyCodec,
  usernameLoginCodec,
  emailLoginCodec,
  accountInitializationCodec,
  passwordResetCodec,
  changePasswordCodec,
};
