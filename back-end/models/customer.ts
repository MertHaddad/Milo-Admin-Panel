// @/models.ts
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "customer",
})
export class Customer extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthday!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  job!: string;
}
