import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello Worlddasdasdasdas!';
  }

  getTest(): string {
    return "test";
  }

}
