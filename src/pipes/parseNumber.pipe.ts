import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value) {
      if (!(parseFloat(value) > 0)) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: `the ${metadata.data} parameter with value '${value}' must be a number`,
        }, HttpStatus.BAD_REQUEST);
      }
    }
    return value;
  }
}
