import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateHunches1617622103979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users_hunches_groups',
                columns:[
                    {
                        name:'nick',
                        type:'varchar'
                    },
                    {
                        name:'group_a',
                        type:'varchar'
                    },
                    {
                        name:'group_b',
                        type:'varchar'
                    },
                    {
                        name:'group_c',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_hunches_groups')
    }

}
