import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";


var appRoot = require("app-root-path");
let router = express.Router();

const initWebRoutes = (app) => {

  // router.get("/api/TTChitietve", userController.handleTTchitietve);
  // router.post("/api/Datve", userController.handleDatve);
  // router.post("/api/Dangky", userController.handleDangky);
  // router.post("/api/Dangnhap", userController.handleDangnhap);
  // router.get("/api/TTGhe", userController.handleTTGhe);
  router.get("/api/Phong",userController.handlePhong);
  router.get("/api/Loaiphong",userController.handleLoaiphong);
  router.get("/api/Noiquy",userController.handleNoiquy);
  router.get("/api/Dsthietbi",userController.handleDsthietbi);
  router.get("/api/DanhmucCSVC",userController.handleDanhmucCSVC);
  router.get("/api/Vitri",userController.handleVitri);
  return app.use("/", router);
};

module.exports = initWebRoutes;
