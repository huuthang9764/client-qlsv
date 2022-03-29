import studentApi from "api/studentapi";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./Student/AddStudent";
import EditStudent from "./Student/EditStudent";
import facultyApi from "api/facultyapi";
import classApi from "api/classapi";

const ContentItem = () => {
  const [student, setStudent] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [lop, setLop] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let token = localStorage.getItem("token");
        const res = await studentApi.getStudents(token);
        setStudent(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
  const handleDelete = (id) => {
    let newStudent = student.filter((e) => (e.id = !id));
    setStudent(newStudent);
    setStudent(student);
    console.log("xoa thanh cong");

    try {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .delete(`https://xdpm.herokuapp.com/api/students/${id}`, {
          headers,
        })
        .then(() => {
          window.location.assign("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="content">
      {/* Topbar */}
      {/* End of Topbar */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Danh sách sinh viên
                </h6>
                <AddStudent />
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-area" style={{ height: "100%" }}>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Họ Tên</th>
                        <th>Ngày Sinh</th>
                        <th>MSSV</th>
                        <th>Mã Khoa</th>
                        <th>Mã Lớp</th>
                        <th>Khóa Học </th>
                        <th>Hệ Đào Tạo</th>
                        <th>thao tac</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.hoten}</td>
                          <td>{item.ngaysinh}</td>
                          <td>{item.mssv}</td>
                          <td>{item.makhoa}</td>
                          <td>{item.malop}</td>
                          <td>{item.khoahoc}</td>
                          <td>{item.hedaotao}</td>
                          <td>
                            <EditStudent
                              data={item}
                              faculty={faculty}
                              lop={lop}
                              style={{
                                zIndex: 100,
                                cursor: "pointer",
                                width: "30",
                              }}
                            />
                            {/* <a
                              className="btn btn-primary btn-sm "
                              href="#"
                              role="button"
                              variant="primary"
                              onClick={handleShow}
                            >
                              {"Sửa"}
                            </a> */}
                            <a
                              className="btn btn-danger btn-sm "
                              role="button"
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                            >
                              {"Xóa"}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentItem;
