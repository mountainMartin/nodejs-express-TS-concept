import { Request, Response } from "express";
import { IBaseController } from "../../common/abstract/ibase-controller";
import { Template } from "./template.entity";
import { TemplateDTO } from "./template.dto";

export interface ITemplateController extends IBaseController<Template, TemplateDTO> {
  getAll(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
