class BaseError extends Error {
    statusCode = 400
    name = 'base-error'
    message = 'Internal Server Error'
    details = {}
  
    constructor() {
      super()
    }
  }
  
  class EmailNotFound extends BaseError {
    statusCode = 404
    name = 'email-not-found'
    message = 'Email does not exist'
    constructor() {
      super()
    }
  }
  
  class InvalidAccount extends BaseError {
    statusCode = 400
    name = 'invalid-account'
    message = 'Invalid Account'
  
    constructor() {
      super()
    }
  }
  
  class NotVerifiedAccount extends BaseError {
    statusCode = 400
    name = 'not-verified-account'
    message = 'Account is not verified'
  
    constructor() {
      super()
    }
  }
  
  class InvalidToken extends BaseError {
    statusCode = 400
    name = 'invalid-token'
    message = 'Token is not valid'
    constructor() {
      super()
    }
  }
  
  module.exports = {
    EmailNotFound,
    InvalidAccount,
    NotVerifiedAccount,
    InvalidToken
  }
  