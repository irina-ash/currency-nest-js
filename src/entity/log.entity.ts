import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public context: string;

  @Column()
  public message: string;

  @Column()
  public level: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'now()',
    nullable: true,
  })
  createdAt: Date;
}
