import { Column, Entity, Unique } from "typeorm";
import { BaseEntity } from "../../common/base/base-entity";
import { TemplateDTO } from "./template.dto";

@Entity({ name: "template" })
@Unique(["id", "digits"])
export class Template extends BaseEntity {
  @Column({ name: "digits", type: "int" })
  public digits: number;

  @Column({ name: "text", type: "varchar", length: 20, nullable: true, default: null })
  public text: string | null;

  @Column({ name: "is_active", type: "tinyint", default: true })
  public isActive: boolean | number;

  @Column({ name: "date", type: "datetime" })
  public date: Date;

  constructor(dto?: TemplateDTO) {
    super();
    if (dto) {
      this.id = dto.id;
      this.digits = dto.digits;
      this.text = dto.text;
      this.isActive = dto.isActive;
      this.date = new Date(dto.date);
    }
  }
}
