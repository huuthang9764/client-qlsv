import axios from "axios";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditStudent = ({ data, lop, faculty }) => {
  const [student, setStudent] = useState({
    hoten: "",
    ngaysinh: "",
    diachi: "",
    mssv: "",
    makhoa: "",
    malop: "",
    khoahoc: "",
    hedaotao: "",
    hinh: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let b = [...faculty];
  let a = b.filter((e) => e.id === data.makhoa);
  const id = data.id;
  const handleShow = () => setShow(true);

  const handleForm = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    for (var key in student) {
      params.append(key, student[key] ? student[key] : data[key]);
    }
    let token = localStorage.getItem("token");
    axios
      .put(`https://xdpm.herokuapp.com/api/students/${id}`, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Button variant="primary" onClick={handleShow}>
          sửa
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Sửa Thông tin Sinh Viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login__content-wrapper">
            <form>
              <div className="form__input-wrap">
                <div className="form__lable">
                  <span>Họ Tên</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="hoten"
                    defaultValue={`${data.hoten}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai thông tin tài khoản{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Ngày sinh</span>
                </div>
                <div className="form__input">
                  <input
                    type="date"
                    name="ngaysinh"
                    defaultValue={`${data.ngaysinh}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Địa Chỉ</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="diachi"
                    defaultValue={`${data.diachi}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Mã số sinh viên</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="mssv"
                    defaultValue={`${data.mssv}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Mã khoa</span>
                </div>
                <div className="form__input">
                  <select name="makhoa" onChange={(e) => handleForm(e)}>
                    {faculty.map((item, i) => (
                      <option
                        selected={item.id === data.makhoa ? true : false}
                        key={i}
                        value={item.id}
                        required
                      >
                        {item.tenkhoa}
                      </option>
                    ))}
                  </select>

                  {/* <input
                    type="text"
                    name="makhoa"
                    onChange={(e) => handleForm(e)}
                    required
                  /> */}
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Mã Lớp</span>
                </div>
                <div className="form__input">
                  <select name="malop" onChange={(e) => handleForm(e)}>
                    {lop.map((item, i) => (
                      <option value={item.id} key={i}>
                        {item.tenlop}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Khóa học</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="khoahoc"
                    defaultValue={`${data.khoahoc}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Hệ đào tạo</span>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="hedaotao"
                    defaultValue={`${data.hedaotao}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
              <div className="form__input-wrap" style={{ marginTop: 2 }}>
                <div className="form__lable">
                  <span>Hình</span>
                </div>
                <div className="form__input">
                  <input
                    type="file"
                    name="hinh"
                    accept="image/*"
                    // defaultValue={`${data.hinh}`}
                    onChange={(e) => handleForm(e)}
                    required
                  />
                </div>
              </div>
              <div className="input__err">
                <div></div>
                <div> Sai mật khẩu{/* error content */}</div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <input
            value={"Sửa Thông Tin Sinh Viên"}
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitForm(e)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditStudent;
