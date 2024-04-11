import { BaseService } from "../../common/base/base-service";
import { ITemplateRepository } from "./itemplate.repository";
import { ITemplateService } from "./itemplate.service";
import { TemplateDTO } from "./template.dto";
import { Template } from "./template.entity";

export class TemplateService extends BaseService<Template, TemplateDTO> implements ITemplateService {
  constructor(private readonly templateRepository: ITemplateRepository) {
    super(templateRepository, Template, TemplateDTO);
  }
}
