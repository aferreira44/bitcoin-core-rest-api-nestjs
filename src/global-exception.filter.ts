import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    // Access request parameters
    const { path, params } = request;

    let statusCode = 500;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      console.log(exception);
      statusCode = exception.getStatus();
      message = exception.message;
    }

    response.status(statusCode).json({
      path,
      error: true,
      statusCode,
      message,
      params, // Include request parameters in the response
    });
  }
}
