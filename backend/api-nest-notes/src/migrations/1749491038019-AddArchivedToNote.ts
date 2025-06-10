import { MigrationInterface, QueryRunner } from "typeorm";

export class AddArchivedToNote1749491038019 implements MigrationInterface {
    name = 'AddArchivedToNote1749491038019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE note ADD COLUMN archived BOOLEAN NOT NULL DEFAULT FALSE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE note DROP COLUMN archived`);
    }

}
