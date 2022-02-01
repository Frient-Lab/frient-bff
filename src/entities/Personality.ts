import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("personality")
export class Personality {
  @PrimaryColumn()
  idPrimeNumber: number;

  @Column()
  description : string;

  @Column()
  characteristics : string;

  @Column()
  active: boolean;
}