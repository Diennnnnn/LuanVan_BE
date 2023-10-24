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
    return res.status(200).json({
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

let handlePhong_tenphong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      phongs: {},
    });
  }
  let phong = await userService.handlePhong_tenphong(key);

  return res.status(200).json({
    phong,
  });
};

let handleLoaiphong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
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
    return res.status(200).json({
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
    return res.status(200).json({
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

let handleDanhmucCSVC = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
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
    return res.status(200).json({
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
    return res.status(200).json({
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

let handleKhuyenmai = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      khuyenmais: {},
    });
  }
  let khuyenmai = await userService.handleKhuyenmai(key);

  return res.status(200).json({
    khuyenmai,
  });
};

let handleDichvu = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      dichvus: {},
    });
  }
  let dichvu = await userService.handleDichvu(key);

  return res.status(200).json({
    dichvu,
  });
};

let handleDatphong = async (req, res) => {
  try {
    let infor = await userService.handleDatphong(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
//noi quy
let handleThemNoiquyQL = async (req, res) => {
  try {
    let infor = await userService.handleThemNoiquyQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaNoiquyQL = async (req, res) => {
  try {
    let noiquy = await userService.handleSuaNoiquyQL(req.body);
    return res.status(200).json(noiquy);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaNoiquyQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaNoiquyQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//csvc
let handleThemCSVCQL = async (req, res) => {
  try {
    let infor = await userService.handleThemCSVCQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaCSVCQL = async (req, res) => {
  try {
    let csvc = await userService.handleSuaCSVCQL(req.body);
    return res.status(200).json(csvc);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaCSVCQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaCSVCQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//dich vu
let handleThemDichvuQL = async (req, res) => {
  try {
    let infor = await userService.handleThemDichvuQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaDichvuQL = async (req, res) => {
  try {
    let dichvu = await userService.handleSuaDichvuQL(req.body);
    return res.status(200).json(dichvu);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaDichvuQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaDichvuQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}


//khuyen mai
let handleThemKhuyenmaiQL = async (req, res) => {
  try {
    let infor = await userService.handleThemKhuyenmaiQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaKhuyenmaiQL = async (req, res) => {
  try {
    let khuyenmai = await userService.handleSuaKhuyenmaiQL(req.body);
    return res.status(200).json(khuyenmai);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaKhuyenmaiQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaKhuyenmaiQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

module.exports = {
  handlePhong: handlePhong,
  handleLoaiphong: handleLoaiphong,
  handleNoiquy: handleNoiquy,
  handleDsthietbi: handleDsthietbi,
  handleDanhmucCSVC: handleDanhmucCSVC,
  handleVitri: handleVitri,
  handleKhachhang: handleKhachhang,
  handleDatphong: handleDatphong,
  handlePhong_tenphong: handlePhong_tenphong,
  handleDichvu :handleDichvu,
  handleKhuyenmai: handleKhuyenmai,

  handleThemNoiquyQL: handleThemNoiquyQL,
  handleSuaNoiquyQL: handleSuaNoiquyQL,
  handleXoaNoiquyQL:handleXoaNoiquyQL,

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

