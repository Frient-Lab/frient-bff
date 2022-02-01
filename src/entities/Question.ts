import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Personality } from "./Personality";

@Entity("question")
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title : string;

  @Column()
  idPersonality: number;

  @Column()
  active: boolean;

  @OneToOne(() => Personality)
  @JoinColumn({name: "idPersonality"})
  personality: Personality;
}