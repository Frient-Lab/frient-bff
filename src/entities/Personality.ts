import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("personality")
export class Personality {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description : string;

  @Column()
  characteristics : string;

  @Column()
  active: boolean;
}