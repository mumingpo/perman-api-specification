import createError from 'http-errors';

/**
 * Errors must have unique errorCodes
 */

declare const errorResponses: {
    readonly BadRequest: createError.HttpError<400>;
    readonly Unauthorized: createError.HttpError<401>;
    readonly Forbidden: createError.HttpError<403>;
    readonly NotFound: createError.HttpError<404>;
    readonly PayloadTooLarge: createError.HttpError<413>;
    readonly Nope: createError.HttpError<418>;
    readonly UsernameAlreadyInUse: createError.HttpError<422>;
    readonly IncorrectUsernameFormat: createError.HttpError<422>;
    readonly UsernameNotInUse: createError.HttpError<422>;
    readonly EmailAlreadyInUse: createError.HttpError<422>;
    readonly IncorrectEmailFormat: createError.HttpError<422>;
    readonly EmailNotInUse: createError.HttpError<422>;
    readonly EmailNotVerified: createError.HttpError<422>;
    readonly EmailAlreadyVerified: createError.HttpError<422>;
    readonly PasswordIncorrect: createError.HttpError<422>;
    readonly IncorrectPasswordFormat: createError.HttpError<422>;
    readonly PasswordCompromised: createError.HttpError<422>;
    readonly AccountRecoveryTokenInvalid: createError.HttpError<422>;
    readonly AccountRecoveryTokenExpired: createError.HttpError<422>;
    readonly TooManyRequests: createError.HttpError<429>;
    readonly RequestHeaderFieldsTooLarge: createError.HttpError<431>;
};

declare const schema: {};

export { errorResponses, schema };
