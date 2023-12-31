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

//hinh anh
let handleLayhinhanh = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      hinhanhPhongs: {},
    });
  }
  let layha = await userService.handleLayhinhanh(key);

  return res.status(200).json({
    layha,
  });
};
let handleLayhinhanh_IdPhong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      hinhanhPhongs: {},
    });
  }
  let layha = await userService.handleLayhinhanh_IdPhong(key);

  return res.status(200).json({
    layha,
  });
};
let handlePostPictures = async (req, res) => {
  try {
    let infor = await userService.handlePostPictures(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
let handleSuaHinhanh = async (req, res) => {
  try {
    let ha = await userService.handleSuaHinhanh(req.body);
    return res.status(200).json(ha);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaHinhanh = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaHinhanh(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

let handleSuaTTKH = async (req, res) => {
  try {
    let ttkh = await userService.handleSuaTTKH(req.body);
    return res.status(200).json(ttkh);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleThemTTKH_SDT = async (req, res) => {
  try {
    let ttkh = await userService.handleThemTTKH_SDT(req.body);
    return res.status(200).json(ttkh);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};
let handleXoaAvtKH = async (req, res) => {
  try {
    let ttkh = await userService.handleXoaAvtKH(req.body);
    return res.status(200).json(ttkh);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};


//phieudat

let handleLayPhieudat = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      phieudats: {},
    });
  }
  let phieudat= await userService.handleLayPhieudat(key);

  return res.status(200).json({
    phieudat,
  });
};

let handleLayPhieudat_idKH = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      phongs: {},
    });
  }
  let phieudat_idKH = await userService.handleLayPhieudat_idKH(key);

  return res.status(200).json({
    phieudat_idKH,
  });
};
let handleLayPhieudat_idPhong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      phongs: {},
    });
  }
  let phieudat_idPhong = await userService.handleLayPhieudat_idPhong(key);

  return res.status(200).json({
    phieudat_idPhong,
  });
};
let handleThongke_ngay = async (req, res) => {
  // let key = req.query.keyword;
  // if (!key) {
  //   return res.status(200).json({
  //     errCode: 1,
  //     errMessage: "missing require parameters",
  //     phieudats: {},
  //   });
  // }
  let phieudat_ngay= await userService.handleThongke_ngay();
  // console.log(phieudat_ngay)

  return res.status(200).json({
    phieudat_ngay,
  });
};

let handleThongke_thang = async (req, res) => {
  // let key = req.query.keyword;
  // if (!key) {
  //   return res.status(200).json({
  //     errCode: 1,
  //     errMessage: "missing require parameters",
  //     phieudats: {},
  //   });
  // }
  let phieudat_thang= await userService.handleThongke_thang();
  // console.log(phieudat_ngay)

  return res.status(200).json({
    phieudat_thang,
  });
};
let handleSuaPhieudat = async (req, res) => {
  try {
    let phieudat = await userService.handleSuaPhieudat(req.body);
    return res.status(200).json(phieudat);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

//Nhanvien
let handleLayNhanvien_SDT = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      nhanviens: {},
    });
  }
  let nhanvien_sdt = await userService.handleLayNhanvien_SDT(key);

  return res.status(200).json({
    nhanvien_sdt,
  });
};

let handleTimkiem = async (req, res) => {
  try {
    let infor = await userService.handleTimkiem(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};


//sddv
let handleLayChitietSDDV = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      chitietSDDVs: {},
    });
  }
  let sddichvu = await userService.handleLayChitietSDDV(key);

  return res.status(200).json({
    sddichvu,
  });
};
let handleThemChitietSDDV = async (req, res) => {
  try {
    let infor = await userService.handleThemChitietSDDV(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let handleSuaChitietSDDV = async (req, res) => {
  try {
    let sddichvu = await userService.handleSuaChitietSDDV(req.body);
    return res.status(200).json(sddichvu);
  } catch(e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage:"error from the server",
    });
  }
};

let handleXoaChitietSDDV = async (req, res) => {
  if(!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameter",
    })
  }
  let message = await userService.handleXoaChitietSDDV(req.body.id);
  console.log(message);
  return res.status(200).json(message);
}

let handleNhanphong = async (req, res) => {
  try {
    let infor = await userService.handleNhanphong(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
let handleTraphong = async (req, res) => {
  try {
    let infor = await userService.handleTraphong(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
let handleLayttnhanphong = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      nhanphong: {},
    });
  }
  let nhanphong = await userService.handleLayttnhanphong(key);

  return res.status(200).json({
    nhanphong,
  });
};
let handleLayttCTSDDV = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      ctsddv: {},
    });
  }
  let ctsddv = await userService.handleLayttCTSDDV(key);

  return res.status(200).json({
    ctsddv,
  });
};

let handleTaohoadon = async (req, res) => {
  try {
    let infor = await userService.handleTaohoadon(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};


let handleLayHoadon = async (req, res) => {
  let key = req.query.keyword;
  if (!key) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      hd: {},
    });
  }
  let hoadon = await userService.handleLayHoadon(key);

  return res.status(200).json({
    hoadon,
  });
};

module.exports = {
  handleLayHoadon:handleLayHoadon,
  handleTaohoadon: handleTaohoadon,
  handleLayttCTSDDV: handleLayttCTSDDV,
  handleNhanphong: handleNhanphong,
  handleTraphong:handleTraphong,
  handleLayttnhanphong:handleLayttnhanphong,
  
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

  handleLayhinhanh: handleLayhinhanh,
  handleLayhinhanh_IdPhong: handleLayhinhanh_IdPhong,
  handlePostPictures: handlePostPictures,
  handleSuaHinhanh:handleSuaHinhanh,
  handleXoaHinhanh: handleXoaHinhanh,

  handleSuaTTKH: handleSuaTTKH,
  handleThemTTKH_SDT: handleThemTTKH_SDT,
  handleXoaAvtKH: handleXoaAvtKH,

  handleLayPhieudat: handleLayPhieudat,
  handleLayPhieudat_idKH :handleLayPhieudat_idKH,
  handleThongke_ngay: handleThongke_ngay,
  handleThongke_thang:handleThongke_thang,
  handleLayPhieudat_idPhong :handleLayPhieudat_idPhong,
  handleSuaPhieudat: handleSuaPhieudat,

  handleLayNhanvien_SDT:handleLayNhanvien_SDT,

  handleTimkiem:handleTimkiem,

  handleLayChitietSDDV:handleLayChitietSDDV,
  handleThemChitietSDDV:handleThemChitietSDDV,
  handleSuaChitietSDDV:handleSuaChitietSDDV,
  handleXoaChitietSDDV:handleXoaChitietSDDV,


};

