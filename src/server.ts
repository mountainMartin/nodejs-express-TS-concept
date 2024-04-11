import express from "express";
import { DataSource } from "typeorm";
import { mainDataSource } from "./main.datasource";
import { RouteManager } from "./managers/route.manager";

export class Server {
  public app: express.Application;
  public dataSource: DataSource;
  private routeManager: RouteManager;

  constructor() {
    this.app = express();
    this.routes();
    this.start();

    this.routeManager = new RouteManager();
  }

  public async routes() {
    mainDataSource.initialize().then(() => {
      this.routeManager.initializeRoutes(this.app);
    });
  }

  public start() {
    mainDataSource.initialize().then(() => {
      this.app.set("port", 1337);
    });

    this.app.set("port", 1337);
    this.app.use(express.json());

    this.app.listen(this.app.get("port"), () => {
      console.log("---------------------------------");
      console.log("server is listening @ port: ", 1337);
      console.log("---------------------------------");
    });
  }
}

new Server();
