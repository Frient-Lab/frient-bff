"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonality1644369330807 = void 0;
const typeorm_1 = require("typeorm");
class CreatePersonality1644369330807 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("personality");
    }
}
exports.CreatePersonality1644369330807 = CreatePersonality1644369330807;
