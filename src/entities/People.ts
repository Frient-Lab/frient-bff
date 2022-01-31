import { Entity, CreateDateColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("people")
export class People {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  urlProfile: string;

  @Column()
  age: number;

  @Column()
  idGender: number;

  @Column()
  idSexualOrientation: number;

  @Column()
  idAddress: number;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;
}