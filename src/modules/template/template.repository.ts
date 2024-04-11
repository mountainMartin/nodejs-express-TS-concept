import { BaseRepository } from "../../common/base/base-repository";
import { ITemplateRepository } from "./itemplate.repository";
import { Template } from "./template.entity";

export class TemplateRepository extends BaseRepository<Template> implements ITemplateRepository {}
