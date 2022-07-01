"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  errorResponses: () => errorResponses_default,
  schema: () => schema_default
});
module.exports = __toCommonJS(src_exports);

// src/v1/errorResponses.ts
var import_http_errors = __toESM(require("http-errors"));
var errorResponses = {
  BadRequest: (0, import_http_errors.default)(400, "The API request is missing required fields."),
  Unauthorized: (0, import_http_errors.default)(401, "User must log in to perform the requested action."),
  Forbidden: (0, import_http_errors.default)(403, "User is not authorized to perform the requested action."),
  NotFound: (0, import_http_errors.default)(404, "The requested resource is not found on the server."),
  PayloadTooLarge: (0, import_http_errors.default)(413, "The body of the request is too large."),
  Nope: (0, import_http_errors.default)(418, "Sir this is a Wendy's"),
  UsernameAlreadyInUse: (0, import_http_errors.default)(422, "An account with this username already exists."),
  IncorrectUsernameFormat: (0, import_http_errors.default)(422, "Username must be 5-30 characters long, start with a letter, and composed entirely of alphanumeric characters."),
  UsernameNotInUse: (0, import_http_errors.default)(422, "There does not appear to be an account associated with this username."),
  EmailAlreadyInUse: (0, import_http_errors.default)(422, "An account with this email already exists."),
  IncorrectEmailFormat: (0, import_http_errors.default)(422, "Email does not appear to be in the correct format."),
  EmailNotInUse: (0, import_http_errors.default)(422, "There does not appear to be an account associated with this email address."),
  EmailNotVerified: (0, import_http_errors.default)(422, "The email address associated with this account has yet to be verified."),
  EmailAlreadyVerified: (0, import_http_errors.default)(422, "The email address associated with this account has already been verified."),
  PasswordIncorrect: (0, import_http_errors.default)(422, "The provided username/password combination does not match with our records."),
  IncorrectPasswordFormat: (0, import_http_errors.default)(422, "Password must be composed of at least 8 characters, and must contain at least one lowercase character, one uppercase character, and one number."),
  PasswordCompromised: (0, import_http_errors.default)(422, "This password cannot be used. Please visit https://haveibeenpwned.com/Passwords for details."),
  AccountRecoveryTokenInvalid: (0, import_http_errors.default)(422, "The provided authentication token is invalid."),
  AccountRecoveryTokenExpired: (0, import_http_errors.default)(422, "The provided authentication token has expired."),
  TooManyRequests: (0, import_http_errors.default)(429, "You have recently made too many requests. Please try again later."),
  RequestHeaderFieldsTooLarge: (0, import_http_errors.default)(431, "The header portion of your request is too large.")
};
var errorResponses_default = errorResponses;

// src/v1/schema.ts
var schema = {};
var schema_default = schema;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorResponses,
  schema
});
