/**
 * Failures must have unique errorCodes
 */

// define failures
const failures = [
  {
    statusCode: 400,
    errorCode: 'BadRequest',
    scope: 'misc',
    message: 'The API request is missing required fields.',
  },
  {
    statusCode: 401,
    errorCode: 'Unauthorized',
    scope: 'auth',
    message: 'User must log in to perform the requested action.',
  },
  {
    statusCode: 403,
    errorCode: 'Forbidden',
    scope: 'privilege',
    message: 'User is not authorized to perform the requested action.',
  },
  {
    statusCode: 404,
    errorCode: 'NotFound',
    scope: 'misc',
    message: 'The requested resource is not found on the server.',
  },
  {
    statusCode: 413,
    errorCode: 'PayloadTooLarge',
    scope: 'misc',
    message: 'The body of the request is too large.',
  },
  {
    statusCode: 418,
    errorCode: 'Nope',
    scope: 'misc',
    message: 'Sir this is an Arby\'s',
  },
  // username
  {
    statusCode: 422,
    errorCode: 'UsernameAlreadyInUse',
    scope: 'user',
    message: 'An account with this username already exists.',
  },
  {
    statusCode: 422,
    errorCode: 'IncorrectUsernameFormat',
    scope: 'user',
    message: 'The provided username does not appear to match the format requirement',
  },
  {
    statusCode: 422,
    errorCode: 'UsernameNotInUse',
    scope: 'user',
    message: 'There does not appear to be an account associated with this username.',
  },
  // email
  {
    statusCode: 422,
    errorCode: 'EmailAlreadyInUse',
    scope: 'user',
    message: 'An account with this email already exists.',
  },
  {
    statusCode: 422,
    errorCode: 'IncorrectEmailFormat',
    scope: 'user',
    message: 'The provided email address does not appear to be in the correct format',
  },
  {
    statusCode: 422,
    errorCode: 'EmailNotInUse',
    scope: 'user',
    message: 'There does not appear to be an account associated with this email address.',
  },
  // email verification status
  {
    statusCode: 422,
    errorCode: 'EmailNotVerified',
    scope: 'user',
    message: 'The email address associated with this account has yet to be verified.',
  },
  {
    statusCode: 422,
    errorCode: 'EmailAlreadyVerified',
    scope: 'user',
    message: 'The email address associated with this account has already been verified.',
  },
  // password
  {
    statusCode: 422,
    errorCode: 'PasswordIncorrect',
    scope: 'user',
    message: 'The provided password does not match with our records.',
  {
    statusCode: 422,
    errorCode: 'PasswordTooSimple',
    scope: 'user',
    message: 'Your new password is too simple.',
  },
  {
    statusCode: 422,
    errorCode: 'PasswordCompromised',
    scope: 'user',
    message: 'This password has been compromised thus is unsafe to use. Please visit https://haveibeenpwned.com/Passwords for details.',
  },
  },
  // token
  {
    statusCode: 422,
    errorCode: 'TokenInvalid',
    scope: 'user',
    message: 'The provided authentication token is invalid.',
  },
  {
    statusCode: 422,
    errorCode: 'TokenExpired',
    scope: 'user',
    message: 'The provided authentication token has expired.',
  },
  {
    statusCode: 429,
    errorCode: 'TooManyRequests',
    scope: 'misc',
    message: 'You have recently made too many requests. Please try again later.',
  },
  {
    statusCode: 431,
    errorCode: 'RequestHeaderFieldsTooLarge',
    scope: 'misc',
    message: 'The header portion of your request is too large.',
  },
  // {
  //   statusCode:,
  //   errorCode:,
  //   scope:,
  //   message:,
  // },
];

// convert into keyed object
const failureResponses = {};

failures.forEach((failure) => {
  failureResponses[failure.errorCode] = failure;
});

export default failureResponses;
