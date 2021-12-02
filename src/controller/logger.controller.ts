import { Controller, Get } from '@nestjs/common';
import { Log } from '../entity/log.entity';
import { LogsService } from '../service/logger.service';

@Controller()
export class LoggerController {
  constructor(private readonly loggerService: LogsService) {}

  @Get('/log')
  getLog(): Promise<Log[]> {
    return this.loggerService.findAll();
  }
}
