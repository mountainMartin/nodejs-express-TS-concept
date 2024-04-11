import { Request, Response, NextFunction } from "express";
import { IBaseRoute } from "../../common/abstract/ibase-route";

export interface ITemplateRoute extends IBaseRoute {
  getAll(req: Request, res: Response, next: NextFunction): Promise<void | Response | NextFunction>;
  getById(req: Request, res: Response, next: NextFunction): Promise<void | Response | NextFunction>;
  create(req: Request, res: Response, next: NextFunction): Promise<void | Response | NextFunction>;
  update(req: Request, res: Response, next: NextFunction): Promise<void | Response | NextFunction>;
  delete(req: Request, res: Response, next: NextFunction): Promise<void | Response | NextFunction>;

  routes(): void;
}
