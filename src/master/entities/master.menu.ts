import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import {IntegerDataType} from "sequelize";

@Table({
    tableName: 'slik_master_menu', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class MasterMenu extends Model<MasterMenu> {

    @Column({autoIncrement: true, primaryKey: true, field: 'cid'})
    cid: number;

    @Column({field: 'menu_name'})
    menuName: string;


    @Column({field: 'menu_tooltip'})
    menuTooltip: string;


    @Column({field: 'menu_url'})
    menuUrl: string;

    @Column({field: 'fa_icon'})
    faIcon: string;

    @Column({field: 'sequence'})
    sequence: number;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
