export class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }
  
  export const handleError = (err, res) => {
    let { statusCode, message } = err;
    console.log('this is error',statusCode,message);
    if (!statusCode || !message) {
      statusCode = 500;
      message = 'Internal server error';
    }
    res.status(statusCode).json({
      msg: message,
    });
  };
  
  export default {
    ErrorHandler, handleError,
  };