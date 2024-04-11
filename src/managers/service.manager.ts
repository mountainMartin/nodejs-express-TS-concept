import { ITemplateService } from "../modules/template/itemplate.service";
import { TemplateService } from "../modules/template/template.service";
import { RepositoryManager } from "./repository.manager";

export class ServiceManager {
  private static instance: ServiceManager;

  private repositoryManager: RepositoryManager;

  private _templateService: ITemplateService;

  constructor() {
    this.repositoryManager = RepositoryManager.getInstance();

    this._templateService = new TemplateService(this.repositoryManager.templateRepository);
  }

  public static getInstance(): ServiceManager {
    if (!ServiceManager.instance) {
      ServiceManager.instance = new ServiceManager();
    }

    return ServiceManager.instance;
  }

  public get templateService(): ITemplateService {
    return this._templateService;
  }
}
