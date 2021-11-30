import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'to get actual currency table, make request GET /currency';
  }
}
