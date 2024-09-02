import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table({
    tableName: 'slik_role_access_detail_tbl', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class RoleAccessDetail extends Model<RoleAccessDetail> {
    @Column({autoIncrement: true, primaryKey: true, field: 'cid'})
    cid: number;

    @Column({field: 'cid_role_access'})
    cidRoleAccess: string;

    @Column({field: 'cid_menu'})
    cidMenu: string;
    @Column({field: 'i'})
    i: number;
    @Column({field: 'u'})
    u: number;
    @Column({field: 'd'})
    d: number;
    @Column({field: 'v'})
    v: number;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
