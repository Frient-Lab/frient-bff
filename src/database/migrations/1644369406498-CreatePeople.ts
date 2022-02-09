import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePeople1644369406498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "people",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "urlProfile",
                        type: "varchar",
                        length: "300"
                    },
                    {
                        name: "age",
                        type: "integer"
                    },
                    {
                        name: "idGender",
                        type: "integer"
                    },
                    {
                        name: "idSexualOrientation",
                        type: "integer"
                    },
                    {
                        name: "idAddress",
                        type: "integer"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "active",
                        type: "boolean"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("people");
    }

}
