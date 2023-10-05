import userService from "../services/userService";


// let handleDangnhap = async (req, res) => {
//   let username = req.body.Taikhoan_KH;
//   let password = req.body.Matkhau_KH;

//   if (!username || !password) {
//     return res.status(500).json({
//       errCode: 1,
//       message: "Missing input",
//     });
//   }
//   let userdata = await userService.handleDangnhap(username, password);
//   console.log(userdata);
//   //check email exist
//   //compare password
//   //return userInfor
//   //accept_token: validate user: JWT: json web token
//   return res.status(200).json({
//     errCode: userdata.errCode,
//     message: userdata.errMessage,
//     khachhang: userdata.khachhang ? userdata.khachhang : {},
//   });
// };

// let handleDangky = async (req, res) => {
//   try {
//     let infor = await userService.handleDangky(req.body);
//     return res.status(200).json(infor);
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "Error from the server",
//     });
//   }
// };

// let handleDatve = async (req, res) => {
//   try {
//     let infor = await userService.handleDatve(req.body);
//     return res.status(200).json(infor);
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "Error from the server",
//     });
//   }
// };

// let handleTTchitietve = async (req, res) => {
//   // let Dienthoai = "ALL"; //req.query.id; //get all or id
//   let id_ve = req.query.keyword;

//   if (!id_ve) {
//     return res.status(200).json({
//       errCode: 1,
//       errMessage: "missing require parameters",
//       chitietves: {},
//     });
//   }

//   let chitietves = await userService.handleTTchitietve(id_ve);

//   return res.status(200).json({
//     // errCode: 0,
//     // errMessage: "ok",
//     chitietves,
//   });
// };

// let handleTTGhe = async (req, res) => {
//   // let Dienthoai = "ALL"; //req.query.id; //get all or id

//   let key = req.query.keyword;

//   if (!key) {
//     return res.status(200).json({
//       errCode: 1,
//       errMessage: "missing require parameters",
//       ghes: {},
//     });
//   }

//   let ghe = await userService.handleTTGhe(key);

//   return res.status(200).json({
//     // errCode: 0,
//     // errMessage: "ok",
//     ghe,
//   });
// };

let handlePhong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      phongs: {},
    });
  }
  let phong = await userService.handlePhong(key);

  return res.status(200).json({
    phong,
  });
};

let handleLoaiphong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      loaiphongs: {},
    });
  }
  let loaiphong = await userService.handleLoaiphong(key);

  return res.status(200).json({
    loaiphong,
  });
};


let handleNoiquy = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      noiquys: {},
    });
  }
  let nq = await userService.handleNoiquy(key);

  return res.status(200).json({
    nq,
  });
};

let handleDsthietbi = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      dsthietbis: {},
    });
  }
  let dstb = await userService.handleDsthietbi(key);

  return res.status(200).json({
    dstb,
  });
};

let handleDanhmucCSVC= async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      danhmuccsvcs: {},
    });
  }
  let dmcsvc = await userService.handleDanhmucCSVC(key);

  return res.status(200).json({
    dmcsvc,
  });
};

let handleVitri = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      vitris: {},
    });
  }
  let vt = await userService.handleVitri(key);

  return res.status(200).json({
    vt,
  });
};
let handleKhachhang = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json ({
      errCode: 1,
      errMessage: "missing require parameters",
      khachhangs: {},
    });
  }
  let khachhang = await userService.handleKhachhang(key);

  return res.status(200).json({
    khachhang,
  });
};
module.exports = {
  handlePhong: handlePhong,
  handleLoaiphong: handleLoaiphong,
  handleNoiquy: handleNoiquy,
  handleDsthietbi: handleDsthietbi,
  handleDanhmucCSVC: handleDanhmucCSVC,
  handleVitri: handleVitri,
  handleKhachhang: handleKhachhang,
};
