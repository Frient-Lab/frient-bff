import { Entity, Column, CreateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";
import { Question } from "./Question";

@Entity("answer")
export class Answer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  idPeople: number;

  @Column()
  idQuestion: number;

  @Column()
  answer: number;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => People)
  @JoinColumn({name: "idPeople"})
  people: People;

  @OneToOne(() => Question)
  @JoinColumn({name: "idQuestion"})
  question: Question;

}