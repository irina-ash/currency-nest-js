import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '../entity/log.entity';
import { LogCreateDto } from '../dto/logCreate.dto';
import { LogRepository } from '../repository/log.repository';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(LogRepository)
    private logRepository: LogRepository,
  ) {}

  findAll(): Promise<Log[]> {
    return this.logRepository.find();
  }

  async createLog(data: LogCreateDto) {
    const newLog = this.logRepository.create(data);
    await this.logRepository.save(newLog, {
      data: {
        isCreatingLogs: true,
      },
    });
    return newLog;
  }
}
