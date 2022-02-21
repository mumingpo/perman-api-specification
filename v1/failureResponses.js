// define failures
const failures = {
  400: {
    type: 'Bad Request',
    scopes: {
      misc: [
        ['BadRequest', 'The server cannot understand the request.'],
      ],
    },
  },
  401: {
    type: 'Unauthorized',
    scopes: {
      auth: [
        ['NotLoggedIn', 'User is not logged in.'],
        ['SessionExpired', 'The user session has expired.'],
      ],
    },
  },
  403: {
    type: 'Forbidden',
    scopes: {
      privilege: [
        ['NotAuthorized', 'User is not authorized to view the requested resource.'],
      ],
    },
  },
  404: {
    type: 'Not Found',
    scopes: {
      misc: [
        ['NotFound', 'The requested resource is not found.'],
      ],
    },
  },
  408: {
    type: 'Request Timeout',
    scopes: {
      misc: [
        ['RequestTimeout', 'The request has been timed-out.'],
      ],
    },
  },
  413: {
    type: 'Payload Too Large',
    scopes: {
      misc: [
        ['PayloadTooLarge', 'Your request sent to the server is too large.'],
      ],
    },
  },
  418: {
    type: 'I\'m A Teapot',
    scopes: {
      misc: [
        ['Nope', 'Sir, this is an Arby\'s.'],
      ],
    },
  },
  422: {
    type: 'Unprocessable Entity',
    scopes: {
      auth: [
        ['PasswordIncorrect', 'Password does not match with our record.'],
        ['PasswordIsNull', 'User password is null. Please reset password to log in.'],
        ['TokenIncorrect', 'Authentication token does not match with our record.'],
        ['TokenExpired', 'The authentication token has expired. Please request your desired action again.'],
      ],
      user: [
        ['UsernameInUse', 'An account with this username already exists.'],
        ['EmailInUse', 'An account with this email address already exists.'],
        ['UsernameNotInUse', 'We cannot find an account associated with this username.'],
        ['EmailNotInUse', 'We cannot find an account associated with this email.'],
        ['IncorrectUsernameFormat', 'The format of the username does not appear to match our requirements.'],
        ['PasswordTooSimple', 'Your new password is too simple'],
        ['PasswordCompromised', 'Your new password appears to have been compromised before. Please visit https://haveibeenpwned.com/Passwords for details.'],
      ],
    },
  },
  429: {
    type: 'Too Many Requests',
    scopes: {
      misc: [
        ['TooManyRequests', 'You have recently made too many requests. Please try again later.'],
      ],
    },
  },
  431: {
    type: 'Request Header Fields Too Large',
    scopes: {
      misc: [
        ['RequestHeaderFieldsTooLarge', 'The header portion of your request is too large.'],
      ],
    },
  },
  // errors should not be in failureResponses
  // 500: {
  //  type: 'Internal Server Error',
  //  scopes: {
  //    misc: [
  //      ['General', 'An unspecified error has occured.'],
  //    ],
  //  },
  // },
  // 503: {
  //  type: 'Service Unavailable',
  //  scopes: {
  //    misc: [
  //      ['ServiceUnavailable', 'The server is unavailable to handle requests at this time. Please try again later.'],
  //    ],
  //  },
  // },
};

// convert into keyed object
const failureResponses = {};

Object.keys(failures).forEach((htmlStatusCode) => {
  const htmlStatusFailures = failures[htmlStatusCode].scopes;
  failureResponses[htmlStatusCode] = {};

  Object.keys(htmlStatusFailures).forEach((scopeName) => {
    const scopeEntries = htmlStatusFailures[scopeName];
    failureResponses[htmlStatusCode][scopeName] = {};

    scopeEntries.forEach((failureEntry) => {
      const failureCode = failureEntry[0];
      const failureMessage = failureEntry[1];

      failureResponses[htmlStatusCode][scopeName][failureCode] = {
        htmlStatusCode,
        scopeName,
        failureCode,
        failureMessage,
      };
    });
  });
});

export default failureResponses;
