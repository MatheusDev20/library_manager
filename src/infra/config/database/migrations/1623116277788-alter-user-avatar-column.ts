/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterUserAvatarColumn1623116277788 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "users" DROP COLUMN "avatar"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "users" ADD "avatar"');
    }
}
