"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAcronyms1644369463002 = void 0;
const typeorm_1 = require("typeorm");
class CreateAcronyms1644369463002 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("acronym");
    }
}
exports.CreateAcronyms1644369463002 = CreateAcronyms1644369463002;
