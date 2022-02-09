import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonality1644369330807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "personality",
                columns: [
                    {
                        name: "idPrimeNumber",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "characteristics",
                        type: "varchar",
                        length: "500"
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
        await queryRunner.dropTable("personality");
    }

}
