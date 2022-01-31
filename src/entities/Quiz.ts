import { Entity, Column, CreateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";
import { Personality } from "./Personality";

@Entity("quiz")
export class Quiz {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  idPeople: number;

  @Column()
  idPersonality: number;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => People)
  @JoinColumn({name: "idPeople"})
  people: People;

  @OneToOne(() => Personality)
  @JoinColumn({name: "idPersonality"})
  personality: Personality;
}