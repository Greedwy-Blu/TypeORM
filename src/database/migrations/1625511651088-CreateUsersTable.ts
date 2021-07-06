import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1625511651088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
await queryRunner.createTable(new Table({
    name: 'users',
    columns: [
        {
    name: "id",
    type: "int",
    isPrimary: true
},
{
    name: "email",
    type: "varchar",
    isUnique: true
},
{
    name: "password",
    type: "varchar",
}
],
}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
