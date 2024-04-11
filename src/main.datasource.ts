import { DataSource } from "typeorm";
import { Template } from "./modules/template/template.entity";

export const mainDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: "root",
  password: "",
  database: "testdb",
  synchronize: false,
  entities: [Template],
});
