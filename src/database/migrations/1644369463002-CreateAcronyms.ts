import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAcronyms1644369463002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "acronym",
                columns: [
                    {
                        name: "idSumAcronyms",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "primeNumber1",
                        type: "integer"
                    },
                    {
                        name: "primeNumber2",
                        type: "integer"
                    },
                    {
                        name: "primeNumber3",
                        type: "integer"
                    },
                    {
                        name: "primeNumber4",
                        type: "integer"
                    },
                    {
                        name: "acronyms",
                        type: "char",
                        length: "4"
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
        await queryRunner.dropTable("acronym");
    }

}


