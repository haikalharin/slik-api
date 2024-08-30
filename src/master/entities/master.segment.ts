import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import {IntegerDataType} from "sequelize";

@Table({
    tableName: 'slik_master_segment', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class MasterSegment extends Model<MasterSegment> {

    @Column({autoIncrement: true, primaryKey: true, field: 'cid'})
    id: number;

    @Column({field: 'segment_name'})
    segmentName: string;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
