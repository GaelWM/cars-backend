import express from "express";
import cors from "cors";
// import CarController from "../controllers/template-group-field.controller";
import error from "../middlewares/error.middleware";

export default function (app: any): void {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  //   const tc = new TemplateController();
  //   app.use("/api/templates", tc.registerRoutes());

  //   const tcg = new TemplateGroupController();
  //   app.use("/api/template-groups", tcg.registerRoutes());

  //   const tcgF = new TemplateGroupFieldController();
  //   app.use("/api/template-group-fields", tcgF.registerRoutes());

  //Always put the error handler middleware function at the end of every middlewares.
  app.use(error);
}
