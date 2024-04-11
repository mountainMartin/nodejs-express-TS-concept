import { format } from "date-fns";
import { Template } from "./template.entity";

export class TemplateDTO {
  public id: string;
  public digits: number;
  public text: string | null;
  public isActive: boolean;
  public date: string;

  constructor(template?: Template) {
    if (template) {
      this.id = template.id;
      this.digits = template.digits;
      this.text = template.text;
      this.isActive = template.isActive === 1 ? true : false;
      this.date = format(new Date(template.date), "yyyy-MM-dd HH:mm:ss");
    }
  }
}
