import { MigrationInterface, QueryRunner } from 'typeorm';

export class LogsTable1638421730928 implements MigrationInterface {
  name = 'LogsTable1638421730928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "currencies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "value" numeric NOT NULL, "test" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_d528c54860c4182db13548e08c4" PRIMARY KEY ("id"))`,
        await queryRunner.query(`CREATE TABLE "logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "context" character varying NOT NULL, "message" character varying NOT NULL, "level" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "logs"`);
        await queryRunner.query(`DROP TABLE "currencies"`);
    }

}
