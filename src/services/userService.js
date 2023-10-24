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

let handleKhuyenmai = (key) => {
  return new Promise(async (resolve, reject) =>{
    try{
      let khuyenmai = "";
      if (key === "ALL") {
        khuyenmai = await db.khuyenmais.findAll({

        });
      }
      if (key && key !== "ALL") {
        khuyenmais = await db.khuyenmais.findAll({
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
        !data.songuoi 
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
          songuoi: data.songuoi,

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
        !data.mota ||
        !data.motaEN
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
        !data.finish
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
          finish: data.finish

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
        !data.finish
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

module.exports = {
  handlePhong: handlePhong,
  handleLoaiphong: handleLoaiphong,
  handleNoiquy: handleNoiquy,
  handleDsthietbi:handleDsthietbi,
  handleDanhmucCSVC: handleDanhmucCSVC,
  handleVitri: handleVitri,
  handleKhachhang: handleKhachhang,
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
};

let handleSuaTTCumrap = (data) => {

  return new Promise(async (resovle, reject) => {
    try {
      if (
        !data.id ||
        !data.tentttt ||
        !data.diachi
      ) {
        resovle({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {

        let cumrap = await db.qlcumraps.findOne({
          where: {
            id: data.id
          },
          raw: false,
        });
        if (cumrap) {
          cumrap.ten_tttt = data.tentttt;
          cumrap.diachi = data.diachi;
          await cumrap.save();
        }
        else {
          resovle({
            errCode: 1,
            errMessage: "Cập nhật thông tin cụm rạp mới KHÔNG thành thông",
          });
        }
        resovle({
          errCode: 0,
          errMessage: "Cập nhật thông tin cụm rạp mới thành thông",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};


let handleXoaTTCumrap = async (Id) => {
  return new Promise(async (resolve, reject) => {
    let cumrap = await db.qlcumraps.findOne({
      where: { id: Id },
    });

    if (!cumrap) {
      resolve({
        errCode: 2,
        errMessage: `Không tìm thấy cụm rạp`,
      });
    }

    await db.qlcumraps.destroy({
      where: { id: Id },
    });

    resolve({
      errCode: 0,
      message: "Thông tin cụm rạp đã xóa",
    });
  });
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
