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
  router.get("/api/Phong_idLP",userController.handlePhong_idLP);

  router.get("/api/Loaiphong",userController.handleLoaiphong);
  router.get("/api/Loaiphong_tenloai",userController.handleLoaiphong_tenloai);

  router.get("/api/Noiquy",userController.handleNoiquy);
  router.get("/api/Dsthietbi",userController.handleDsthietbi);
  router.get("/api/DanhmucCSVC",userController.handleDanhmucCSVC);
  router.get("/api/Vitri",userController.handleVitri);
  router.get("/api/Khachhang",userController.handleKhachhang);
  router.get("/api/ALLKhachhang",userController.handleALLKhachhang);
  router.get("/api/LayNhanvien",userController.handleLayNhanvien);

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

  router.post("/api/ThemVitriQL",userController.handleThemVitriQL);
  router.post("/api/SuaVitriQL",userController.handleSuaVitriQL);
  router.delete("/api/XoaVitriQL",userController.handleXoaVitriQL);

  router.post("/api/ThemLoaiphongQL",userController.handleThemLoaiphongQL);
  router.post("/api/SuaLoaiphongQL",userController.handleSuaLoaiphongQL);
  router.delete("/api/XoaLoaiphongQL",userController.handleXoaLoaiphongQL);

  router.post("/api/ThemThietbiQL",userController.handleThemThietbiQL);
  router.post("/api/SuaThietbiQL",userController.handleSuaThietbiQL);
  router.delete("/api/XoaThietbiQL",userController.handleXoaThietbiQL);

  router.post("/api/ThemPhongQL",userController.handleThemPhongQL);
  router.post("/api/SuaPhongQL",userController.handleSuaPhongQL);
  router.delete("/api/XoaPhongQL",userController.handleXoaPhongQL);

  router.post("/api/ThemNhanvienQL",userController.handleThemNhanvienQL);
  router.post("/api/SuaNhanvienQL",userController.handleSuaNhanvienQL);
  router.delete("/api/XoaNhanvienQL",userController.handleXoaNhanvienQL);

  router.get("/api/Layhinhanh",userController.handleLayhinhanh);
  router.get("/api/Layhinhanh_IdPhong",userController.handleLayhinhanh_IdPhong);

  router.post("/api/PostPictures",userController.handlePostPictures);
  router.post("/api/SuaHinhanh",userController.handleSuaHinhanh);
  router.delete("/api/XoaHinhanh",userController.handleXoaHinhanh);

  router.post("/api/SuaTTKH",userController.handleSuaTTKH);
  router.post("/api/ThemTTKH_SDT",userController.handleThemTTKH_SDT);
  router.post("/api/XoaAvtKH",userController.handleXoaAvtKH);

  router.get("/api/LayPhieudat",userController.handleLayPhieudat);
  router.get("/api/LayPhieudat_idKH",userController.handleLayPhieudat_idKH);

  router.get("/api/LayNhanvien_SDT",userController.handleLayNhanvien_SDT);


  return app.use("/", router);
};

module.exports = initWebRoutes;
