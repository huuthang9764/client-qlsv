import Loading from "components/Loading/Loading";
import React, { useState } from "react";

import register from "service/register-service";

import "./style.scss";
const Load = () => {
  return <Loading />;
};

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const handleFormChange = (e) => {
    let data = e.target;
    setForm({ ...form, [data.name]: data.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsRegister(true);
    if (form.email === "" || form.password === "") {
      return;
    }
    register(form);
  };
  return (
    <div className="login__bg login__wrapper">
      {isRegister ? (
        <Load />
      ) : (
        <div className="login__content-wrapper">
          <h1 className="login__title">Đăng Ký</h1>
          <form>
            <div className="form__input-wrap">
              <div className="form__lable">
                <span>Email</span>
              </div>
              <div className="form__input">
                <input
                  type="email"
                  name="email"
                  placeholder="nhom2@gmail.com"
                  onChange={(e) => handleFormChange(e)}
                  required
                />
              </div>
            </div>
            <div className="input__err">
              <div></div>
              <div> Sai thông tin tài khoản{/* error content */}</div>
            </div>
            <div className="form__input-wrap" style={{ marginTop: 5 }}>
              <div className="form__lable">
                <span>Password</span>
              </div>
              <div className="form__input">
                <input
                  type="password"
                  name="password"
                  placeholder="12345678"
                  onChange={(e) => handleFormChange(e)}
                  required
                />
              </div>
            </div>
            <div className="input__err">
              <div></div>
              <div> Sai mật khẩu{/* error content */}</div>
            </div>
            <div className="form__input-wrap" style={{ marginTop: 5 }}>
              <div className="form__lable">
                <span>Name</span>
              </div>
              <div className="form__input">
                <input
                  type="name"
                  name="name"
                  placeholder="Nguyen Huu Thang"
                  onChange={(e) => handleFormChange(e)}
                  required
                />
              </div>
            </div>
            <div className="login__button-wrap" style={{ marginTop: 10 }}>
              <input
                value={"Đăng Ký"}
                type="submit"
                className="btn btn-primary"
                onClick={(e) => submitForm(e)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
