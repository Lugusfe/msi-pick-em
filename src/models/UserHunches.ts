import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity('users_hunches_groups')
class UserHunches {

    @PrimaryColumn()
    nick: string;

    @Column()
    group_a: string;

    @Column()
    group_b: string;

    @Column()
    group_c: string;

    @CreateDateColumn()
    created_at: Date;
}

export default UserHunches