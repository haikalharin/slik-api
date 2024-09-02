import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table({
  tableName: 'slik_role_access_tbl', // Explicitly specify the table name in the database
  timestamps: true,   // Use timestamps for `created_at` and `updated_at`
})
export class RoleAccess extends Model<RoleAccess> {
  @Column({autoIncrement: true, primaryKey: true, field: 'cid'})
  cid: number;

  @Column({field: 'role_access_name'})
  roleAccessName: string;

 @Column({field: 'description'})
  description: string;

  @CreatedAt
  @Column({field: 'created_at'})
  createdAt: Date;

  @UpdatedAt
  @Column({field: 'updated_at'})
  updatedAt: Date;
}
