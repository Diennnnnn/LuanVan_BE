import userService from "../services/userService";


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

let handlePhong_idLP = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      phongs: {},
    });
  }
  let phong_idLP = await userService.handlePhong_idLP(key);

  return res.status(200).json({
    phong_idLP,
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

let handleLoaiphong_tenloai = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      loaiphongs: {},
    });
  }
  let lp_tenloai = await userService.handleLoaiphong_tenloai(key);

  return res.status(200).json({
    lp_tenloai,
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


let handleALLKhachhang = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      khachhangs: {},
    });
  }
  let allkh= await userService.handleALLKhachhang(key);

  return res.status(200).json({
    allkh,
  });
};

let handleLayNhanvien = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      khachhangs: {},
    });
  }
  let allnv= await userService.handleLayNhanvien(key);

  return res.status(200).json({
    allnv,
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

//vitri
let handleThemVitriQL = async (req, res) => {
  try {
    let infor = await userService.handleThemVitriQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaVitriQL = async (req, res) => {
  try {
    let vitri = await userService.handleSuaVitriQL(req.body);
    return res.status(200).json(vitri);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaVitriQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaVitriQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//loaiphong

let handleThemLoaiphongQL = async (req, res) => {
  try {
    let infor = await userService.handleThemLoaiphongQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaLoaiphongQL = async (req, res) => {
  try {
    let loaiphong = await userService.handleSuaLoaiphongQL(req.body);
    return res.status(200).json(loaiphong);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaLoaiphongQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaLoaiphongQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//thiet bi

let handleThemThietbiQL = async (req, res) => {
  try {
    let infor = await userService.handleThemThietbiQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaThietbiQL = async (req, res) => {
  try {
    let thietbi = await userService.handleSuaThietbiQL(req.body);
    return res.status(200).json(thietbi);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaThietbiQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaThietbiQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//phong

let handleThemPhongQL = async (req, res) => {
  try {
    let infor = await userService.handleThemPhongQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaPhongQL = async (req, res) => {
  try {
    let phong = await userService.handleSuaPhongQL(req.body);
    return res.status(200).json(phong);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaPhongQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaPhongQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

//nhanvien

let handleThemNhanvienQL = async (req, res) => {
  try {
    let infor = await userService.handleThemNhanvienQL(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaNhanvienQL = async (req, res) => {
  try {
    let nhanvien = await userService.handleSuaNhanvienQL(req.body);
    return res.status(200).json(nhanvien);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaNhanvienQL = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaNhanvienQL(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}
module.exports = {
  handlePhong: handlePhong,
  handlePhong_idLP: handlePhong_idLP,
  handleLoaiphong: handleLoaiphong,
  handleLoaiphong_tenloai: handleLoaiphong_tenloai,
  handleNoiquy: handleNoiquy,
  handleDsthietbi: handleDsthietbi,
  handleDanhmucCSVC: handleDanhmucCSVC,
  handleVitri: handleVitri,
  handleKhachhang: handleKhachhang,
  handleALLKhachhang: handleALLKhachhang,
  handleLayNhanvien:handleLayNhanvien,
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
};

