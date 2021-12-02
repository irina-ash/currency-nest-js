import { Injectable } from '@nestjs/common';
import { Currency } from '../entity/currency.entity';
import { CurrencyCreateDto } from '../dto/currencyCreate.dto';
import { CurrencyRepository } from '../repository/currency.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyRepository)
    private currencyRepository: CurrencyRepository,
  ) {}

  findAll(): Promise<Currency[]> {
    return this.currencyRepository.find();
  }

  findOne(id: string): Promise<Currency> {
    return this.currencyRepository.findOneOrFail(id);
  }

  async create(data: CurrencyCreateDto) {
    const newItem = this.currencyRepository.create(data);
    return await this.currencyRepository.save(newItem);
  }

  async remove(id: string): Promise<void> {
    await this.currencyRepository.delete(id);
  }
}
