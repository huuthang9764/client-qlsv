import classApi from "api/classapi";
import facultyApi from "api/facultyapi";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddStudent = (props) => {
  const [faculty, setFaculty] = useState([]);
  const [lop, setLop] = useState([]);
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
  const handleShow = () => setShow(true);

  const handleForm = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    (async () => {
      try {
        let token = localStorage.getItem("token");
        const res = await facultyApi.getFaculty(token);
        setFaculty(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        let token = localStorage.getItem("token");
        const res = await classApi.getClass(token);
        setLop(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const add = (data) => {
    console.log(data);
    let token = localStorage.getItem("token");
    axios
      .post("https://xdpm.herokuapp.com/api/students", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.assign("/");
      })
      .catch((error) => console.log(error));
  };
  const submitForm = (e) => {
    e.preventDefault();

    add(student);
  };
  return (
    <>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Button variant="primary" onClick={handleShow}>
          Add Question
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Thêm Sinh Viên</Modal.Title>
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
                    placeholder="Nguyen Huu Thang"
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
                      <option key={i} value={item.id} required>
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
            value={"Thêm Sinh Viên"}
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitForm(e)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddStudent;
