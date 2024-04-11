import { IBaseService } from "../../common/abstract/ibase-service";
import { TemplateDTO } from "./template.dto";
import { Template } from "./template.entity";

export interface ITemplateService extends IBaseService<Template, TemplateDTO> {
  getAll(): Promise<TemplateDTO[]>;
  getById(id: string): Promise<TemplateDTO | null>;
  create(dto: TemplateDTO): Promise<TemplateDTO | null>;
  update(id: string, dto: TemplateDTO): Promise<TemplateDTO | null>;
  delete(id: string): Promise<void>;
}
