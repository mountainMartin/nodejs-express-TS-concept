import { BaseRoute } from "../../common/base/base-route";
import { TemplateDTO } from "./template.dto";
import { Template } from "./template.entity";

export class TemplateRoute extends BaseRoute<Template, TemplateDTO> {}
