import { Model } from 'sequelize-typescript';
export declare class MasterCity extends Model<MasterCity> {
    cityCode: String;
    cityName: String;
    createdAt: Date;
    updatedAt: Date;
}
