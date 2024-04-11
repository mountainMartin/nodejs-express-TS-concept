import { IBaseRepository } from "../../common/abstract/ibase-repository";
import { Template } from "./template.entity";

export interface ITemplateRepository extends IBaseRepository<Template> {
  getAll(): Promise<Template[]>;
  getById(id: string): Promise<Template | null>;
  create(entity: Template): Promise<Template | null>;
  update(id: string, entity: Template): Promise<Template | null>;
  delete(id: string): Promise<void>;
}
