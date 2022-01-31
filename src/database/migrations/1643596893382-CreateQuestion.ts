import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestion1643596893382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "question",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "300"
                    },
                    {
                        name: "active",
                        type: "boolean"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("question");
    }

}
