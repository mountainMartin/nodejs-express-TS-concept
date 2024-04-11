import { ITemplateController } from "../modules/template/itemplate.controller";
import { TemplateController } from "../modules/template/template.controller";
import { ServiceManager } from "./service.manager";

export class ControllerManager {
  private static instance: ControllerManager;

  private serviceManager: ServiceManager;

  private _templateController: ITemplateController;

  constructor() {
    this.serviceManager = ServiceManager.getInstance();

    this._templateController = new TemplateController(this.serviceManager.templateService);
  }

  public static getInstance(): ControllerManager {
    if (!ControllerManager.instance) {
      ControllerManager.instance = new ControllerManager();
    }

    return ControllerManager.instance;
  }

  public get templateController(): ITemplateController {
    return this._templateController;
  }
}
