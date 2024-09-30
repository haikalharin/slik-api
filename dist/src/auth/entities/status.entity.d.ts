import { Model } from 'sequelize-typescript';
export declare class Status extends Model<Status> {
    id: number;
    martial: string;
    religion: string;
    company: string;
}
