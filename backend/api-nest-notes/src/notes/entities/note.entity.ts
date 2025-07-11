import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    
    @Column()
    content:string;

    @Column({default: false})
    archived:boolean;
}
