/**
 * Errors must have unique errorCodes
 */

import createError from 'http-errors';

type WithErrorCode<S = string> = { errorCode: S };

const errors = {
  BadRequest: createError(400, 'The API request is missing required fields.'),
  Unauthorized: createError(401, 'User must log in to perform the requested action.'),
  Forbidden: createError(403, 'User is not authorized to perform the requested action.'),
  NotFound: createError(404, 'The requested resource is not found on the server.'),
  PayloadTooLarge: createError(413, 'The body of the request is too large.'),
  Nope: createError(418, 'Sir this is a Wendy\'s'),
  UsernameAlreadyInUse: createError(422, 'An account with this username already exists.'),
  IncorrectUsernameFormat: createError(422, 'Username must be 5-30 characters long, start with a letter, and composed entirely of alphanumeric characters.'),
  UsernameNotInUse: createError(422, 'There does not appear to be an account associated with this username.'),
  EmailAlreadyInUse: createError(422, 'An account with this email already exists.'),
  IncorrectEmailFormat: createError(422, 'Email does not appear to be in the correct format.'),
  EmailNotInUse: createError(422, 'There does not appear to be an account associated with this email address.'),
  EmailNotVerified: createError(422, 'The email address associated with this account has yet to be verified.'),
  EmailAlreadyVerified: createError(422, 'The email address associated with this account has already been verified.'),
  PasswordIncorrect: createError(422, 'The provided username/password combination does not match with our records.'),
  IncorrectPasswordFormat: createError(422, 'Password must be composed of at least 8 characters, and must contain at least one lowercase character, one uppercase character, and one number.'),
  PasswordCompromised: createError(422, 'This password cannot be used. Please visit https://haveibeenpwned.com/Passwords for details.'),
  AccountRecoveryTokenInvalid: createError(422, 'The provided authentication token is invalid.'),
  AccountRecoveryTokenExpired: createError(422, 'The provided authentication token has expired.'),
  TooManyRequests: createError(429, 'You have recently made too many requests. Please try again later.'),
  RequestHeaderFieldsTooLarge: createError(431, 'The header portion of your request is too large.'),
  InternalServerError: createError(501, 'We have encountered an unspecified error while processing your request, sorry :('),
} as const;

Object.keys(errors).forEach((key) => {
  const k = key as keyof typeof errors;
  Object.defineProperty(errors[k], 'errorCode', {
    configurable: false,
    enumerable: true,
    value: k,
    writable: false,
  });
});

type Errors = typeof errors;

const errorResponses = errors as {
  [key in keyof Errors]: Errors[key] & WithErrorCode<key>
};

type ErrorResponses = typeof errorResponses;
type DefinedError = ErrorResponses[keyof ErrorResponses];

const standardizeError: (e: unknown, defaultError?: DefinedError) => DefinedError = (
  e,
  defaultError = errorResponses.InternalServerError,
) => {
  if (!createError.isHttpError(e)) {
    return defaultError;
  }

  const errorCode = `${e.errorCode}`;
  if (!Object.hasOwn(errorResponses, errorCode)) {
    return defaultError;
  }

  return errorResponses[errorCode as keyof ErrorResponses];
};

const safelyDo: <T>(f: () => T, defaultError?: DefinedError) => T = (
  f,
  defaultError = errorResponses.InternalServerError,
) => {
  try {
    return f();
  } catch (e) {
    throw standardizeError(e, defaultError);
  }
};

export default errorResponses;
export { standardizeError, safelyDo };
