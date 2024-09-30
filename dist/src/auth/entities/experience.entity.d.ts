import { Model } from 'sequelize-typescript';
export declare class Experience extends Model<Experience> {
    id: number;
    company: string;
    adress: string;
    reason: string;
}
