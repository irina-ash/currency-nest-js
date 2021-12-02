import { Module } from '@nestjs/common';
import { CustomLogger } from '../customLogger';
import { LogsService } from '../service/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LogRepository } from '../repository/log.repository';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([LogRepository])],
  providers: [CustomLogger, LogsService],
  exports: [CustomLogger],
})
export class LoggerModule {}
