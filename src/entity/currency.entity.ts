import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'decimal', nullable: false })
  value: number;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'now()',
    nullable: true,
  })
  createdAt: Date;
}
