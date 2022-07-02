import p, { strict, makeEnum } from '@mumingpo/primate';
import { dateCodec } from './common';

const allowedPrivacyOptions = [
  'public',
  'friends',
  'private',
] as const;

const allowedThemeOptions = [
  'light',
  'dark',
] as const;

const profileCodec = p.object({
  firstName: strict.stringCodec,
  lastName: strict.stringCodec,
  profileImage: strict.stringCodec,
  locale: strict.stringCodec,
  precrastination: strict.numberCodec,
  birthDate: p.optional(dateCodec),
  privacyScope: makeEnum.makeEnumStringCodec(allowedPrivacyOptions, 'friends'),
  theme: makeEnum.makeEnumStringCodec(allowedThemeOptions, 'light'),
});

export {
  profileCodec,
  allowedPrivacyOptions,
  allowedThemeOptions,
};
