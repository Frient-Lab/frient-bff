import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnswer1644369758216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "answer",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "idPeople",
                        type: "integer"
                    },
                    {
                        name: "idQuestion",
                        type: "integer"
                    },
                    {
                        name: "answer",
                        type: "numeric",
                        precision: 5,
                        scale: 2
                    },
                    {
                        name: "active",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_answer_people",
                        columnNames: ["idPeople"],
                        referencedTableName: "people",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_answer_question",
                        columnNames: ["idQuestion"],
                        referencedTableName: "question",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("answer");
    }

}

