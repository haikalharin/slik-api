import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import {IntegerDataType} from "sequelize";

@Table({
    tableName: 'slik_master_validation_tbl', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class MasterValidation extends Model<MasterValidation> {

    @Column({autoIncrement: true, primaryKey: true, field: 'cid'})
    cid: number;

    @Column({field: 'validation_name'})
    validationName: string;

    @Column({field: 'segment_name'})
    segmentName: string;

    @Column({field: 'validation_name'})
    errorCode: string;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
