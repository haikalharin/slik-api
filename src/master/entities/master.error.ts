import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import {IntegerDataType} from "sequelize";

@Table({
    tableName: 'slik_master_error', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class MasterError extends Model<MasterError> {

    @Column({ primaryKey: true, field: 'error_code'})
    errorCode: string;

    @Column({field: 'error_name'})
    errorName: string;

    @Column({field: 'description'})
    description: string;


    @Column({field: 'regex'})
    regex: string;


    @Column({field: 'solution'})
    solution: string;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
