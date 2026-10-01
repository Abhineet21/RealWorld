class HttpException extends Error {
  public readonly errorCode: number;

  constructor(
    errorCode: number,
    message: string
  ) {
    super(message);

    this.name = 'HttpException';
    this.errorCode = errorCode;

    Object.setPrototypeOf(this, HttpException.prototype);
  }
}

export default HttpException;
