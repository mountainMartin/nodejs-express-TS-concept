import { Request, Response } from "express";
import { IBaseEntity } from "../abstract/ibase-entity";
import { IBaseService } from "../abstract/ibase-service";
import { IBaseController } from "../abstract/ibase-controller";

export class BaseController<T extends IBaseEntity, DTO> implements IBaseController<T, DTO> {
  protected service: IBaseService<T, DTO>;

  constructor(service: IBaseService<T, DTO>) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.service.getAll();
      return res.status(200).send(data);
    } catch (error) {
      throw error;
    }
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id;
    try {
      const data = await this.service.getById(id);
      return res.status(200).send(data);
    } catch (error) {
      throw error;
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const dto: DTO = req.body as DTO;
    try {
      const data = await this.service.create(dto);
      return res.status(200).send(data);
    } catch (error) {
      throw error;
    }
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id;
    const dto: DTO = req.body as DTO;

    try {
      const data = await this.service.update(id, dto);
      return res.status(200).send(data);
    } catch (error) {
      throw error;
    }
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id;

    try {
      await this.service.delete(id);
      return res.sendStatus(204);
    } catch (error) {
      throw error;
    }
  };
}
