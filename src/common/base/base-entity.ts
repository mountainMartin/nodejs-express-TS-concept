import { PrimaryGeneratedColumn } from "typeorm";
import { IBaseEntity } from "../abstract/ibase-entity";

export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  public id: string; // CHAR(36)
}
