"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeople1644369406498 = void 0;
const typeorm_1 = require("typeorm");
class CreatePeople1644369406498 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("people");
    }
}
exports.CreatePeople1644369406498 = CreatePeople1644369406498;
