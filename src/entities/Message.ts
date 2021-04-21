import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    //relacionamento com a tabela user - unindo as colunas
    @JoinColumn({ name: "user_id" })
    //muitas msg para um usuario
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Message };