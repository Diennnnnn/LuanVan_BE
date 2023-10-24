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
  router.get("/api/Phong_tenphong",userController.handlePhong_tenphong);
  router.get("/api/Loaiphong",userController.handleLoaiphong);
  router.get("/api/Noiquy",userController.handleNoiquy);
  router.get("/api/Dsthietbi",userController.handleDsthietbi);
  router.get("/api/DanhmucCSVC",userController.handleDanhmucCSVC);
  router.get("/api/Vitri",userController.handleVitri);
  router.get("/api/Khachhang",userController.handleKhachhang);
  router.get("/api/Dichvu",userController.handleDichvu);
  router.get("/api/Khuyenmai",userController.handleKhuyenmai);

  router.post("/api/Datphong",userController.handleDatphong);

  router.post("/api/ThemNoiquyQL",userController.handleThemNoiquyQL);
  router.post("/api/SuaNoiquyQL",userController.handleSuaNoiquyQL);
  router.delete("/api/XoaNoiquyQL",userController.handleXoaNoiquyQL);

  router.post("/api/ThemCSVCQL",userController.handleThemCSVCQL);
  router.post("/api/SuaCSVCQL",userController.handleSuaCSVCQL);
  router.delete("/api/XoaCSVCQL",userController.handleXoaCSVCQL);

  router.post("/api/ThemDichvuQL",userController.handleThemDichvuQL);
  router.post("/api/SuaDichvuQL",userController.handleSuaDichvuQL);
  router.delete("/api/XoaDichvuQL",userController.handleXoaDichvuQL);

  router.post("/api/ThemKhuyenmaiQL",userController.handleThemKhuyenmaiQL);
  router.post("/api/SuaKhuyenmaiQL",userController.handleSuaKhuyenmaiQL);
  router.delete("/api/XoaKhuyenmaiQL",userController.handleXoaKhuyenmaiQL);


  return app.use("/", router);
};

module.exports = initWebRoutes;
