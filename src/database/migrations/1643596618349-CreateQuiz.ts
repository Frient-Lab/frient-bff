import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuiz1643596618349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "quiz",
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
                        name: "idPersonality",
                        type: "integer"
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
                        name: "fk_quiz_people",
                        columnNames: ["idPeople"],
                        referencedTableName: "people",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_quiz_personality",
                        columnNames: ["idPersonality"],
                        referencedTableName: "personality",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("quiz");
    }

}
