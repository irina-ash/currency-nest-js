import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyService } from '../service/currency.service';
import { CurrencyController } from '../controller/currency.controller';
import { CurrencyRepository } from '../repository/currency.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyRepository])],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
