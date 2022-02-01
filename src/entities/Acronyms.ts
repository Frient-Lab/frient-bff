import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("acronym")
export class Acronyms {
  @PrimaryColumn()
  idSumAcronyms: number;

  @Column()
  primeNumber1: number;

  @Column()
  primeNumber2: number;

  @Column()
  primeNumber3: number;

  @Column()
  primeNumber4: number;

  @Column()
  acronyms : string;

  @Column()
  active: boolean;
}