import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Currency } from '../entity/currency.entity';
import { CurrencyDto } from '../dto/currency.dto';

@Injectable()
export class CurrencyService {
  findAll(): Promise<Currency[]> {
    return getRepository(Currency).find();
  }

  findOne(id: string): Promise<Currency> {
    return getRepository(Currency).findOne(id);
  }

  async create(data: CurrencyDto) {
    return getRepository(Currency).save({
      name: data.name,
      value: data.value,
    });
  }

  async remove(id: string): Promise<void> {
    await getRepository(Currency).delete(id);
  }
}
