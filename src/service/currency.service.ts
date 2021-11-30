import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Currency } from '../entity/currency.entity';
import { CurrencyCreateDto } from '../dto/currencyCreate.dto';

@Injectable()
export class CurrencyService {
  findAll(): Promise<Currency[]> {
    return getRepository(Currency).find();
  }

  findOne(id: string): Promise<Currency> {
    return getRepository(Currency).findOne(id);
  }

  async create(data: CurrencyCreateDto) {
    const newItem = await getRepository(Currency).create(data);
    return await getRepository(Currency).save(newItem);
  }

  async remove(id: string): Promise<void> {
    await getRepository(Currency).delete(id);
  }
}
