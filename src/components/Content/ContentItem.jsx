import studentApi from "api/studentapi";
import React, { useEffect, useState } from "react";

function ContentItem() {
  const [student, setStudent] = useState([]);

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
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-area">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Họ Tên</th>
                        <th>Ngày Sinh</th>
                        <th>MSSV</th>
                        <th>Mã Khoa</th>
                        <th>Mã Lớp</th>
                        <th>Khóá Học </th>
                        <th>Hệ Đào Tạo</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((item, i) => (
                        <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.hoten}</td>
                          <td>{item.ngaysinh}</td>
                          <td>{item.mssv}</td>
                          <td>{item.makhoa}</td>
                          <td>{item.malop}</td>
                          <td>{item.khoahoc}</td>
                          <td>{item.hedaotao}</td>
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
}
export default ContentItem;
