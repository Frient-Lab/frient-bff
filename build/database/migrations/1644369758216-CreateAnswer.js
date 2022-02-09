"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswer1644369758216 = void 0;
const typeorm_1 = require("typeorm");
class CreateAnswer1644369758216 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("answer");
    }
}
exports.CreateAnswer1644369758216 = CreateAnswer1644369758216;
