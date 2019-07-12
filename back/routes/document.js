const { Router } = require("express");
const documentController = require("../controllers/document");

module.exports = app => {
  const documentRouter = Router();

  documentRouter.post("/", documentController.add);
  documentRouter.put("/:_id", documentController.edit);

  app.use("/documents", documentRouter);
};
