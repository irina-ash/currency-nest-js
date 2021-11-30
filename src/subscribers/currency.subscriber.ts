import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Currency } from '../entity/currency.entity';

@EventSubscriber()
export class CurrencySubscriber implements EntitySubscriberInterface<Currency> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Currency;
  }

  beforeInsert(event: InsertEvent<Currency>) {
    console.log(`BEFORE CURRENCY INSERTED: `, event.entity);
  }

  afterLoad(entity: Currency): Promise<any> | void {
    console.log(`AFTER LOAD DATA: `, entity);
  }
}
