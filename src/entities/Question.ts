import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("question")
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title : string;

  @Column()
  active: boolean;
}