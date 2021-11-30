import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth.module';
import { CurrencyModule } from './module/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyController } from './controller/currency.controller';
import { CurrencyService } from './service/currency.service';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, CurrencyModule],
  controllers: [AppController, CurrencyController],
  providers: [AppService, CurrencyService],
})
export class AppModule {}
