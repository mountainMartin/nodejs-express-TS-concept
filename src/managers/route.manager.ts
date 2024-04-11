import express, { Request, Response } from "express";
import { ControllerManager } from "./controller.manager";
import { errorManager } from "./error.manager";
import { TemplateRoute } from "../modules/template/template.route";

export class RouteManager {
  private baseURL: string;
  private controllerManager: ControllerManager;

  private templateRoute: TemplateRoute;

  constructor() {
    this.baseURL = "/api/";
    this.controllerManager = ControllerManager.getInstance();

    this.templateRoute = new TemplateRoute(this.controllerManager.templateController);
  }

  public initializeRoutes = (app: express.Application): void => {
    app.get(this.baseURL + "test/", (req: Request, res: Response) => {
      return res.status(200).send("hello there");
    });

    app.use(this.baseURL + "dev/template/", this.templateRoute.router);

    app.use(errorManager);
  };
}
