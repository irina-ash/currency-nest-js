import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrencyService } from '../service/currency.service';
import { Currency } from '../entity/currency.entity';
import { CurrencyDto } from '../dto/currency.dto';

@Controller()
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/currency')
  getCurrencyList(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }

  @Get('/currency/:id')
  getCurrencyItem(@Param('id') id: string): Promise<Currency> {
    return this.currencyService.findOne(id);
  }

  @Post('/currency')
  postCurrency(@Body() data: CurrencyDto): Promise<Currency> {
    return this.currencyService.create(data);
  }
}
