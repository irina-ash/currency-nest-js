import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currencies')
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'decimal', nullable: false })
  value: number;

  @Column({ type: 'varchar', nullable: false })
  test: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'now()',
    nullable: true,
  })
  createdAt: Date;
}
