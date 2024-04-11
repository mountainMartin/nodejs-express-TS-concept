import { DeepPartial } from "typeorm";
import { IBaseEntity } from "./ibase-entity";

export interface IBaseRepository<T extends IBaseEntity> {
  getAll(): Promise<T[]>;

  getById(id: string): Promise<T | null>;

  create(entity: DeepPartial<T>): Promise<T | null>;

  update(id: string, entity: DeepPartial<T>): Promise<T | null>;

  delete(id: string): Promise<void>;
}
