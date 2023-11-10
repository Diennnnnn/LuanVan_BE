const { Op } = require("sequelize");
import { reject } from "lodash";
import db from "../models/index";
import { resolve } from "app-root-path";
// import bcrypt, { hash } from "bcryptjs"; //hashpassword


let handlePhong = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let phong = "";
      if (key === "ALL") {
        phong = await db.phongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        phong = await db.phongs.findAll({
          where: {id:key},
        });
      }
      resolve(phong);     
    } catch(e){
      reject(e);
    }
  });
};

let handlePhong_tenphong = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let phong = "";
      if (key === "ALL") {
        phong = await db.phongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        phong = await db.phongs.findAll({
          where: {tenphong:key},
        });
      }
      resolve(phong);     
    } catch(e){
      reject(e);
    }
  });
};

let handlePhong_idLP = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let phong_idLP = "";
      if (key === "ALL") {
        phong_idLP = await db.phongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        phong_idLP = await db.phongs.findAll({
          where: {id_LP:key},
        });
      }
      resolve(phong_idLP);     
    } catch(e){
      reject(e);
    }
  });
};

let handleLoaiphong = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let loaiphong = "";
      if (key === "ALL") {
        loaiphong = await db.loaiphongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        loaiphong = await db.loaiphongs.findAll({
          where: {id:key},
        });
      }
      resolve(loaiphong);
    } catch(e){
      reject(e);
    }
  });
};

let handleLoaiphong_tenloai = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let lp_tenloai = "";
      if (key === "ALL") {
        lp_tenloai = await db.loaiphongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        lp_tenloai = await db.loaiphongs.findAll({
          where: {tenloaiphong:key},
        });
      }
      resolve(lp_tenloai);     
    } catch(e){
      reject(e);
    }
  });
};

let handleNoiquy = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let nq = "";
      if (key === "ALL") {
        nq = await db.noiquys.findAll({

        });
      }
      if (key && key !== "ALL") {
        nq = await db.noiquys.findAll({
          where: {id:key},
        });
      }
      resolve(nq);
    } catch(e){
      reject(e);
    }
  });
};

let handleDsthietbi = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let dstb = "";
      if (key === "ALL") {
        dstb = await db.dsthietbis.findAll({

        });
      }
      if (key && key !== "ALL") {
        dstb = await db.dsthietbis.findAll({
          where: {id_phong:key},
        });
      }
      resolve(dstb);
    } catch(e){
      reject(e);
    }
  });
};

let handleDanhmucCSVC = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let dmcsvc = "";
      if (key === "ALL") {
        dmcsvc = await db.danhmuccsvcs.findAll({

        });
      }
      if (key && key !== "ALL") {
        dmcsvc = await db.danhmuccsvcs.findAll({
          where: {id:key},
        });
      }
      resolve(dmcsvc);
    } catch(e){
      reject(e);
    }
  });
};

let handleVitri = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let vt = "";
      if (key === "ALL") {
        vt = await db.vitris.findAll({

        });
      }
      if (key && key !== "ALL") {
        vt = await db.vitris.findAll({
          where: {id:key},
        });
      }
      resolve(vt);
    } catch(e){
      reject(e);
    }
  });
};

let handleKhachhang = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let khachhang = "";
      if (key === "ALL") {
        khachhang = await db.khachhangs.findAll({

        });
      }
      if (key && key !== "ALL") {
        khachhang = await db.khachhangs.findAll({
          where: {SDT:key},
        });
      }
      resolve(khachhang);     
    } catch(e){
      reject(e);
    }
  });
};

let handleDichvu = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let dichvu = "";
      if (key === "ALL") {
        dichvu = await db.dichvus.findAll({

        });
      }
      if (key && key !== "ALL") {
        dichvu = await db.dichvus.findAll({
          where: {id:key},
        });
      }
      resolve(dichvu);     
    } catch(e){
      reject(e);
    }
  });
};

let handleALLKhachhang = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let allkh = "";
      if (key === "ALL") {
        allkh = await db.khachhangs.findAll({

        });
      }
      if (key && key !== "ALL") {
        allkh = await db.khachhangs.findAll({
          where: {id:key},
        });
      }
      resolve(allkh);     
    } catch(e){
      reject(e);
    }
  });
};

let handleLayNhanvien = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let allnv = "";
      if (key === "ALL") {
        allnv = await db.nhanviens.findAll({

        });
      }
      if (key && key !== "ALL") {
        allnv = await db.nhanviens.findAll({
          where: {id:key},
        });
      }
      resolve(allnv);     
    } catch(e){
      reject(e);
    }
  });
};
let handleKhuyenmai = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let khuyenmai = "";
      if (key === "ALL") {
        khuyenmai = await db.khuyenmais.findAll({

        });
      }
      if (key && key !== "ALL") {
        khuyenmai = await db.khuyenmais.findAll({
          where: {id:key},
        });
      }
      resolve(khuyenmai);     
    } catch(e){
      reject(e);
    }
  });
};

let handleDatphong = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.id_KH ||
        !data.id_phong ||
        !data.ngaydat ||
        !data.check_in ||
        !data.check_out ||
        !data.songuoi ||
        !data.tongtien 
        
        //có thể rỗng
        // !data.thanhtoan ||
        // !data.trangthai ||
        // !data.ghichu ||
        // !data.hotennguoio ||
        // !data.SDT_nguoio ||
        // !data.CCCD_nguoio

      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.phieudats.create({
          id_KH: data.id_KH,
          id_Phong: data.id_phong,
          ngaydat: data.ngaydat,
          check_in: data.check_in,
          check_out: data.check_out,
          tongtien: data.tongtien,
          ghichu: data.ghichu,
          songuoi: data.songuoi,
          thanhtoan: data.thanhtoan,
          hotennguoio: data.hotennguoio,
          SDT_nguoio: data.SDT_nguoio,
          CCCD_nguoio: data.CCCD_nguoio,

        });
        resolve({
          errCode:0,
          errMessage: "Đặt phòng thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}
//noi quy
let handleThemNoiquyQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.mota
        //  ||
        // !data.motaEN
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.noiquys.create({
          mota: data.mota,
          motaEN: data.motaEN,

        });
        resolve({
          errCode:0,
          errMessage: "Thêm nội quy thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaNoiquyQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.mota ||
        !data.motaEN
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let noiquy = await db.noiquys.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(noiquy){
          noiquy.mota = data.mota;
          noiquy.motaEN = data.motaEN;
          await noiquy.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaNoiquyQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let noiquy = await db.noiquys.findOne({
      where: {id: Id},
    });
    if (!noiquy) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy nội quy"
      });
    }
    await db.noiquys.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa nội quy"
    });
  });
};
//csvc

let handleThemCSVCQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.tenCSVC ||
        !data.giagoc ||
        !data.soluong ||
        !data.thoigianmua
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.danhmuccsvcs.create({
          tenCSVC: data.tenCSVC,
          giagoc: data.giagoc,
          soluong: data.soluong,
          thoigianmua: data.thoigianmua

        });
        resolve({
          errCode:0,
          errMessage: "Thêm cơ sở vật chất thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaCSVCQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.tenCSVC ||
        !data.giagoc ||
        !data.soluong ||
        !data.thoigianmua
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let csvc = await db.danhmuccsvcs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(csvc){
          csvc.tenCSVC = data.tenCSVC;
          csvc.giagoc = data.giagoc;
          csvc.soluong = data.soluong;
          csvc.thoigianmua = data.thoigianmua;
          await csvc.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaCSVCQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let csvc = await db.danhmuccsvcs.findOne({
      where: {id: Id},
    });
    if (!csvc) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy cơ sở vật chất"
      });
    }
    await db.danhmuccsvcs.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa cơ sở vật chất"
    });
  });
};

//dichvu

let handleThemDichvuQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.tenDV ||
        !data.gia ||
        !data.DVT ||
        !data.ghichu
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.dichvus.create({
          tenDV: data.tenDV,
          gia: data.gia,
          DVT: data.DVT,
          ghichu: data.ghichu

        });
        resolve({
          errCode:0,
          errMessage: "Thêm dịch vụ thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaDichvuQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.tenDV ||
        !data.gia ||
        !data.DVT ||
        !data.ghichu
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let dichvu = await db.dichvus.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(dichvu){
          dichvu.tenDV = data.tenDV;
          dichvu.gia = data.gia;
          dichvu.DVT = data.DVT;
          dichvu.ghichu = data.ghichu;
          await dichvu.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaDichvuQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let dichvu = await db.dichvus.findOne({
      where: {id: Id},
    });
    if (!dichvu) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy dịch vụ"
      });
    }
    await db.dichvus.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa dịch vụ"
    });
  });
};

//khuyenmai

let handleThemKhuyenmaiQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.tenKM ||
        !data.phantram ||
        !data.mota ||
        !data.start ||
        !data.finish ||
        !data.dieukien
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.khuyenmais.create({
          tenKM: data.tenKM,
          phantram: data.phantram,
          mota: data.mota,
          start: data.start,
          finish: data.finish,
          dieukien: data.dieukien

        });
        resolve({
          errCode:0,
          errMessage: "Thêm khuyễn mãi thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaKhuyenmaiQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.tenKM ||
        !data.phantram ||
        !data.mota ||
        !data.start ||
        !data.finish ||
        !data.dieukien
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let khuyenmai = await db.khuyenmais.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(khuyenmai){
          khuyenmai.tenKM = data.tenKM;
          khuyenmai.phantram = data.phantram;
          khuyenmai.mota = data.mota;
          khuyenmai.start = data.start;
          khuyenmai.finish = data.finish;
          khuyenmai.dieukien = data.dieukien;

          await khuyenmai.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaKhuyenmaiQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let khuyenmai = await db.khuyenmais.findOne({
      where: {id: Id},
    });
    if (!khuyenmai) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy khuyến mãi"
      });
    }
    await db.khuyenmais.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa khuyến mãi"
    });
  });
};


//vi tri
let handleThemVitriQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.khu 
        // ||
        // !data.tang 
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.vitris.create({
          khu: data.khu,
          tang: data.tang,
        });
        resolve({
          errCode:0,
          errMessage: "Thêm vị trí thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaVitriQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.khu ||
        !data.tang
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let vitri = await db.vitris.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(vitri){
          vitri.khu = data.khu;
          vitri.tang = data.tang;
          
          await vitri.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaVitriQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let vitri = await db.vitris.findOne({
      where: {id: Id},
    });
    if (!vitri) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy vị trí"
      });
    }
    await db.vitris.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa vị trí"
    });
  });
};

//loaiphong

let handleThemLoaiphongQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.tenloaiphong ||
        !data.songuoi ||
        !data.gia 
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.loaiphongs.create({
          tenloaiphong: data.tenloaiphong,
          songuoi: data.songuoi,
          gia: data.gia
        });
        resolve({
          errCode:0,
          errMessage: "Thêm loại phòng thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaLoaiphongQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.tenloaiphong ||
        !data.songuoi ||
        !data.gia
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let loaiphong = await db.loaiphongs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(loaiphong){
          loaiphong.tenloaiphong = data.tenloaiphong;
          loaiphong.songuoi = data.songuoi;
          loaiphong.gia = data.gia;

          
          await loaiphong.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành côngggg"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaLoaiphongQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let loaiphong = await db.loaiphongs.findOne({
      where: {id: Id},
    });
    if (!loaiphong) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy loại phòng"
      });
    }
    await db.loaiphongs.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa loại phòng"
    });
  });
};

//thietbi

let handleThemThietbiQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.id_CSVC ||
        !data.id_Phong ||
        !data.soluong ||
        !data.thoigianbatdau 
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.dsthietbis.create({
          id_CSVC: data.id_CSVC,
          id_Phong: data.id_Phong,
          soluong: data.soluong,
          thoigianbatdau: data.thoigianbatdau

        });
        resolve({
          errCode:0,
          errMessage: "Thêm thiết bị thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaThietbiQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.id_CSVC ||
        !data.id_Phong ||
        !data.soluong ||
        !data.thoigianbatdau 
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let thietbi = await db.dsthietbis.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(thietbi){
          thietbi.id_CSVC = data.id_CSVC;
          thietbi.id_Phong = data.id_Phong;
          thietbi.soluong = data.soluong;
          thietbi.thoigianbatdau = data.thoigianbatdau;
          
          await thietbi.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành côngggg"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaThietbiQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let thietbi = await db.dsthietbis.findOne({
      where: {id: Id},
    });
    if (!thietbi) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy thiết bị"
      });
    }
    await db.dsthietbis.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa thiết bị"
    });
  });
};

//phong\

let handleThemPhongQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.id_LP ||
        !data.id_VT ||
        !data.tenphong ||
        !data.mota ||
        !data.dientich 
      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.phongs.create({
          id_LP: data.id_LP,
          id_VT: data.id_VT,
          tenphong: data.tenphong,
          mota: data.mota,
          dientich: data.dientich

        });
        resolve({
          errCode:0,
          errMessage: "Thêm phòng thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaPhongQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.id_LP ||
        !data.id_VT ||
        !data.tenphong ||
        !data.mota  ||
        !data.dientich 
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let phong = await db.phongs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(phong){
          phong.id_LP = data.id_LP;
          phong.id_VT = data.id_VT;
          phong.tenphong = data.tenphong;
          phong.mota = data.mota;
          phong.dientich = data.dientich
          await phong.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành côngggg"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaPhongQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let phong = await db.phongs.findOne({
      where: {id: Id},
    });
    if (!phong) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy phòng"
      });
    }
    await db.phongs.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa phòng"
    });
  });
};

//nhanvien

let handleThemNhanvienQL = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.hotenNV ||
        !data.ngaysinh ||
        !data.gioitinh ||
        !data.CCCD ||
        !data.SDT ||
        !data.email ||
        !data.diachi ||
        !data.chucvu

      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.nhanviens.create({
          hotenNV: data.hotenNV,
          ngaysinh: data.ngaysinh,
          gioitinh: data.gioitinh,
          CCCD: data.CCCD,
          SDT: data.SDT,
          email: data.email,
          diachi: data.diachi,
          chucvu: data.chucvu,

        });
        resolve({
          errCode:0,
          errMessage: "Thêm thông tin nhân viên thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleSuaNhanvienQL = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.hotenNV ||
        !data.ngaysinh ||
        !data.gioitinh ||
        !data.CCCD ||
        !data.SDT ||
        !data.email ||
        !data.diachi ||
        !data.chucvu
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let nhanvien = await db.nhanviens.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(nhanvien){
          nhanvien.hotenNV= data.hotenNV,
          nhanvien.ngaysinh= data.ngaysinh,
          nhanvien.gioitinh= data.gioitinh,
          nhanvien.CCCD= data.CCCD,
          nhanvien.SDT= data.SDT,
          nhanvien.email= data.email,
          nhanvien.diachi= data.diachi,
          nhanvien.chucvu= data.chucvu,
          await nhanvien.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập thông tin nhân viên không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thông tin nhân viên thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaNhanvienQL = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let nhanvien = await db.nhanviens.findOne({
      where: {id: Id},
    });
    if (!nhanvien) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy thông tin nhân viên"
      });
    }
    await db.nhanviens.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa thông tin nhân viên"
    });
  });
};

//hinh anh
let handlePostPictures = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(
        // !data.truyền từ FE qua
        !data.hinhanh ||
        !data.id_Phong

      ) {
        resolve({
          errCode: 110,
          errMessage: "Missing parameter",
        });
      } else{
        await db.hinhanhPhongs.create({
          hinhanh: data.hinhanh,
          id_Phong: data.id_Phong,

        });
        resolve({
          errCode:0,
          errMessage: "Thêm hình ảnh thành công",
        });
      }
    } catch(e) {
      reject(e);
    }
  })
}

let handleLayhinhanh = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let layha = "";
      if (key === "ALL") {
        layha = await db.hinhanhPhongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        layha = await db.hinhanhPhongs.findAll({
          where: {id:key},
        });
      }
      resolve(layha);
    } catch(e){
      reject(e);
    }
  });
};
let handleLayhinhanh_IdPhong = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let layha = "";
      if (key === "ALL") {
        layha = await db.hinhanhPhongs.findAll({

        });
      }
      if (key && key !== "ALL") {
        layha = await db.hinhanhPhongs.findAll({
          where: {id_Phong:key},
        });
      }
      resolve(layha);
    } catch(e){
      reject(e);
    }
  });
};
let handleSuaHinhanh = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.hinhanh ||
        !data.id_Phong
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let ha = await db.hinhanhPhongs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(ha){
          ha.hinhanh = data.hinhanh;
          ha.id_Phong = data.id_Phong;
          await ha.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaHinhanh = async (Id) => {
  return new Promise (async (resolve, reject) => {
    let ha = await db.hinhanhPhongs.findOne({
      where: {id: Id},
    });
    if (!ha) {
      resolve({
        errCode: 2,
        errMessage: "Không tìm thấy hình ảnh"
      });
    }
    await db.hinhanhPhongs.destroy({
      where: {id: Id},
    });
    resolve ({
      errCode: 0,
      errMessage: "Đã xóa hình ảnh"
    });
  });
};


let handleSuaTTKH = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id ||
        !data.hotenKH ||
        !data.ngaysinh ||
        !data.gioitinh ||
        !data.CMND ||
        !data.SDT ||
        !data.email ||
        !data.avt
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let ttkh = await db.khachhangs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(ttkh){
          ttkh.hotenKH = data.hotenKH;
          ttkh.ngaysinh = data.ngaysinh;
          ttkh.gioitinh = data.gioitinh;
          ttkh.CMND = data.CMND;
          ttkh.SDT = data.SDT;
          ttkh.email = data.email;
          ttkh.avt = data.avt;
          await ttkh.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleThemTTKH_SDT = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.sdt
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await db.khachhangs.create({          
          SDT: data.sdt

        });
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

let handleXoaAvtKH = (data) => {
  return new Promise(async ( resolve, reject) => {
    try{
      if(
        !data.id
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let ttkh = await db.khachhangs.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if(ttkh){
          ttkh.avt = null;         
          await ttkh.save();
        }
        else{
          resolve({
            errCode: 1,
            errMessage: "Cập nhập không thành công"
          });
        }
        resolve({
          errCode: 0,
          errMessage:"Cập nhập thành công"
        });
      }
    } catch(e){
      reject(e);
    }
  });
};

//phieudat

let handleLayPhieudat = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let phieudat = "";
      if (key === "ALL") {
        phieudat = await db.phieudats.findAll({

        });
      }
      if (key && key !== "ALL") {
        phieudat = await db.phieudats.findAll({
          where: {id:key},
        });
      }
      resolve(phieudat);     
    } catch(e){
      reject(e);
    }
  });
};


let handleLayPhieudat_idKH = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let phieudat_idKH = "";
      if (key === "ALL") {
        phieudat_idKH = await db.phieudats.findAll({

        });
      }
      if (key && key !== "ALL") {
        phieudat_idKH = await db.phieudats.findAll({
          where: {id_KH:key},
        });
      }
      resolve(phieudat_idKH);     
    } catch(e){
      reject(e);
    }
  });
};

//nhanvien

let handleLayNhanvien_SDT = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let nhanvien_sdt = "";
      if (key === "ALL") {
        nhanvien_sdt = await db.nhanviens.findAll({

        });
      }
      if (key && key !== "ALL") {
        nhanvien_sdt = await db.nhanviens.findAll({
          where: {SDT:key},
        });
      }
      resolve(nhanvien_sdt);     
    } catch(e){
      reject(e);
    }
  });
};


module.exports = {
  handlePhong: handlePhong,
  handlePhong_idLP: handlePhong_idLP,
  handleLoaiphong: handleLoaiphong,
  handleLoaiphong_tenloai: handleLoaiphong_tenloai,
  handleNoiquy: handleNoiquy,
  handleDsthietbi:handleDsthietbi,
  handleDanhmucCSVC: handleDanhmucCSVC,
  handleVitri: handleVitri,
  handleKhachhang: handleKhachhang,
  handleALLKhachhang: handleALLKhachhang,
  handleLayNhanvien: handleLayNhanvien,
  handleDichvu: handleDichvu,
  handleKhuyenmai: handleKhuyenmai,
  
  
  handleDatphong: handleDatphong,
  handlePhong_tenphong:handlePhong_tenphong,

  handleThemNoiquyQL: handleThemNoiquyQL,
  handleSuaNoiquyQL: handleSuaNoiquyQL,
  handleXoaNoiquyQL: handleXoaNoiquyQL,

  handleThemCSVCQL: handleThemCSVCQL,
  handleXoaCSVCQL:handleXoaCSVCQL,
  handleSuaCSVCQL:handleSuaCSVCQL,

  handleThemDichvuQL: handleThemDichvuQL,
  handleSuaDichvuQL: handleSuaDichvuQL,
  handleXoaDichvuQL: handleXoaDichvuQL,

  handleThemKhuyenmaiQL: handleThemKhuyenmaiQL,
  handleSuaKhuyenmaiQL: handleSuaKhuyenmaiQL,
  handleXoaKhuyenmaiQL: handleXoaKhuyenmaiQL,

  handleThemVitriQL: handleThemVitriQL,
  handleSuaVitriQL: handleSuaVitriQL,
  handleXoaVitriQL: handleXoaVitriQL,

  handleThemLoaiphongQL: handleThemLoaiphongQL,
  handleSuaLoaiphongQL: handleSuaLoaiphongQL,
  handleXoaLoaiphongQL: handleXoaLoaiphongQL,

  handleThemThietbiQL: handleThemThietbiQL,
  handleSuaThietbiQL: handleSuaThietbiQL,
  handleXoaThietbiQL: handleXoaThietbiQL,

  handleThemPhongQL: handleThemPhongQL,
  handleSuaPhongQL: handleSuaPhongQL,
  handleXoaPhongQL: handleXoaPhongQL,

  handleThemNhanvienQL: handleThemNhanvienQL,
  handleSuaNhanvienQL: handleSuaNhanvienQL,
  handleXoaNhanvienQL: handleXoaNhanvienQL,

  handleLayhinhanh: handleLayhinhanh,
  handleLayhinhanh_IdPhong: handleLayhinhanh_IdPhong,
  handlePostPictures: handlePostPictures,
  handleSuaHinhanh:handleSuaHinhanh,
  handleXoaHinhanh: handleXoaHinhanh,

  handleSuaTTKH: handleSuaTTKH,
  handleThemTTKH_SDT: handleThemTTKH_SDT,
  handleXoaAvtKH: handleXoaAvtKH,

  handleLayPhieudat:handleLayPhieudat,
  handleLayPhieudat_idKH :handleLayPhieudat_idKH,

  handleLayNhanvien_SDT:handleLayNhanvien_SDT,
};


// const salt = bcrypt.genSaltSync(10);

// let handleDangnhap = (username, password) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let userdata = {};
//       if (username) {
//         //user ton tai >>> true
//         //compare password
//         let khachhang = await db.khachhangs.findOne({
//           //get duoc alldata user
//           attributes: ["Taikhoan_Kh", "Matkhau_KH"], //get data can thiet
//           where: { Taikhoan_Kh: username },
//           raw: true,
//         });
//         if (khachhang) {
//           if (password === khachhang.Matkhau_KH) {
//             userdata.errCode = 0;
//             userdata.message = "ok";
//           } else {
//             userdata.errCode = 1;
//             userdata.message = "sai password";
//           }
//         } else {
//           userdata.errCode = 2;
//           userdata.message = "user khong ton tai";
//         }
//         resolve(userdata);
//       } else {
//         //return err
//         reject({
//           errCode: 3,
//           errMessage: `Email not found. Try again`,
//         });
//         // userdata.errCode = 1;
//         // userdata.errMessage = `Email not found. Try again`;
//       }
//       // resolve(userdata);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// let handleDangky = (data) => {

//   return new Promise(async (resovle, reject) => {
//     try {
//       if (
//         !data.hten_KH ||
//         !data.Ngaysinh ||
//         !data.gt_KH ||
//         !data.sdt_KH ||
//         !data.cccd_KH ||
//         !data.email_KH ||
//         !data.diachi_KH ||
//         !data.taikhoan_KH ||
//         !data.matkhau_KH       
//       ) {
//         resovle({
//           errCode: 101,
//           errMessage: "Missing parameter",
//         });
//       } else {    
//         let khachhang = await db.khachhangs.findOne({
//           where: {
//             Hten_KH: data.hten_KH,
//             Email_KH: data.email_KH,
//             Sdt_KH: data.sdt_KH,
//           },
//         });

//         if (khachhang) {
//           resovle({
//             errCode: 1,
//             errMessage: "Người dùng đã có tài khoản",
//           });
//         } else {
//           await db.khachhangs.create({
//             id_KH: 5,
//             Hten_KH: data.hten_KH,
//             Sdt_KH: data.sdt_KH,
//             Email_KH: data.email_KH,
//             Ngaysinh_KH: data.Ngaysinh,           
//             Diachi_KH: data.diachi_KH,
//             Gioitinh_KH: data.gt_KH,
//             Cccd_KH: data.cccd_KH,
//             Taikhoan_KH: data.taikhoan_KH,
//             Matkhau_KH: data.matkhau_KH,
//           });

//           resovle({
//             errCode: 0,
//             errMessage: "Tạo tài khoản thành công",
//           });
//         }
//         resovle({
//           errCode: 0,
//           errMessage: "Tạo và lưu",
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// let handleDatve = (data) => {

//   return new Promise(async (resovle, reject) => {
//     try {
//       if (
//         !data.hten_KH ||
//         !data.httt ||
//         !data.tongtien ||
//         !data.soluongghe ||
//         !data.ngaymuave ||
//         !data.id_KH ||
//         !data.id_ghe ||
//         !data.id_suatchieu ||
//         !data.id_rap  ||
//         !data.id_cumrap ||
//         !data.id_KM ||
//         !data.id_NV ||
//         !data.id_doan    
//       ) {
//         resovle({
//           errCode: 110,
//           errMessage: "Missing parameter",
//         });
//       } else {    
 
//           await db.ves.create({
//             // id_KH: 5,
//             Hten_KH: data.hten_KH,
//             HTTT: data.httt,
//             Tongtien: data.tongtien,
//             SLghe: data.soluongghe,           
//             Ngaymuave: data.ngaymuave,
//             id_KH: data.id_KH,
//             id_ghe: data.id_ghe,
//             id_suatchieu	: data.id_suatchieu,
//             id_rap	: data.id_rap,
//             id_cumrap: data.id_cumrap,
//             id_KM: data.id_KM,
//             id_NV: data.id_NV,
//             id_DA: data.id_doan,
//           });

//           resovle({
//             errCode: 0,
//             errMessage: "Tạo tài khoản thành công",
//           });
//         }
//         resovle({
//           errCode: 0,
//           errMessage: "Tạo và lưu",
//         });
//       // }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// let handleTTchitietve = (id_ve) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let chitietve = "";
//       if (id_ve === "ALL") {
//         chitietve = await db.chitietves.findAll({
//         });
//       }

//       if (id_ve && id_ve !== "ALL") {
//         chitietve = await db.chitietves.findAll({
//           where: { id_Ve: id_ve },
//         });
//       }
//       resolve(chitietve);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// let handleTTGhe = (key) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let ghe = "";
//       if (key === "ALL") {
//         ghe = await db.ghes.findAll({
//         });
//       }

//       if (key && key !== "ALL") {
//         ghe = await db.ghes.findAll({
//           where: { id: key },
//         });
//       }
//       resolve(ghe);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
