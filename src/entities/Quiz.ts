import { Entity, Column, CreateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Acronyms } from "./Acronyms";
import { People } from "./People";

@Entity("quiz")
export class Quiz {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  idPeople: number;

  @Column()
  idAcronyms: number;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => People)
  @JoinColumn({name: "idPeople"})
  people: People;

  @OneToOne(() => Acronyms)
  @JoinColumn({name: "idAcronyms"})
  personality: Acronyms;
}