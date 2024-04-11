import { IBaseEntity } from "./ibase-entity";

export interface IBaseService<T extends IBaseEntity, DTO> {
  getAll(): Promise<DTO[]>;

  getById(id: string): Promise<DTO | null>;

  create(dto: DTO): Promise<DTO | null>;

  update(id: string, dto: DTO): Promise<DTO | null>;

  delete(id: string): Promise<void>;
}
