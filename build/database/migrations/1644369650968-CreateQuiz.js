"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuiz1644369650968 = void 0;
const typeorm_1 = require("typeorm");
class CreateQuiz1644369650968 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    name: "idAcronyms",
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
                    name: "fk_quiz_acronym",
                    columnNames: ["idAcronyms"],
                    referencedTableName: "acronym",
                    referencedColumnNames: ["idSumAcronyms"]
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("quiz");
    }
}
exports.CreateQuiz1644369650968 = CreateQuiz1644369650968;
