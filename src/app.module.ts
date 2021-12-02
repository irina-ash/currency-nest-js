import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth.module';
import { CurrencyModule } from './module/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from './module/logger.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, CurrencyModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
