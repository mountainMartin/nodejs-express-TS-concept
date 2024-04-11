import { ITemplateRepository } from "../modules/template/itemplate.repository";
import { Template } from "../modules/template/template.entity";
import { TemplateRepository } from "../modules/template/template.repository";

export class RepositoryManager {
  private static instance: RepositoryManager;

  private _templateRepository: TemplateRepository;

  constructor() {
    this._templateRepository = new TemplateRepository(Template);
  }

  public static getInstance(): RepositoryManager {
    if (!RepositoryManager.instance) {
      RepositoryManager.instance = new RepositoryManager();
    }

    return RepositoryManager.instance;
  }

  public get templateRepository(): ITemplateRepository {
    return this._templateRepository;
  }
}
