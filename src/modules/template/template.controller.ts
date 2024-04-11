import { BaseController } from "../../common/base/base-controller";
import { ITemplateController } from "./itemplate.controller";
import { TemplateDTO } from "./template.dto";
import { Template } from "./template.entity";

export class TemplateController extends BaseController<Template, TemplateDTO> implements ITemplateController {}
