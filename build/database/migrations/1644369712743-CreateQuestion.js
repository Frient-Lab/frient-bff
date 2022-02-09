"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestion1644369712743 = void 0;
const typeorm_1 = require("typeorm");
class CreateQuestion1644369712743 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("question");
    }
}
exports.CreateQuestion1644369712743 = CreateQuestion1644369712743;
