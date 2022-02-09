import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestion1644369712743 implements MigrationInterface {

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
                        name: "idPersonality",
                        type: "integer"
                    },
                    {
                        name: "active",
                        type: "boolean"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_quiz_personality",
                        columnNames: ["idPersonality"],
                        referencedTableName: "personality",
                        referencedColumnNames: ["idPrimeNumber"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("question");
    }

}

