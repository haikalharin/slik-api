import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table({
    tableName: 'slik_master_city', // Explicitly specify the table name in the database
    timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class MasterCity extends Model<MasterCity> {

    @Column({primaryKey: true, field: 'city_code'})
    cityCode: String;

    @Column({field: 'city_name'})
    cityName: String;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
