import React, { useEffect, useState } from "react";

import facultyApi from "api/facultyapi";
import classApi from "api/classapi";

import "./navbar.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navba() {
  // const [student, setStudent] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [lop, setLop] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let token = localStorage.getItem("token");
  //       const res = await studentApi.getStudents(token);
  //       setStudent(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

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

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo"></div>
        <div className="sidebar__menu">
          <a className="sidebar__menu__item" href="#">
            <div
              className="sidebar__menu__item__txt"
              style={{ color: "white" }}
            >
              Dashboard
            </div>
          </a>
          <Navbar bg="light" expand="lg" style={{ width: "90" }}>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "60px" }}
                navbarScroll
              >
                <NavDropdown title="Khoa" id="navbarScrollingDropdown">
                  {faculty.map((item, i) => (
                    <NavDropdown.Item href="#action3" key={i}>
                      {item.tenkhoa}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Navbar
            bg="light"
            expand="lg"
            style={{ width: "90", paddingTop: "20" }}
          >
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "60px" }}
                navbarScroll
              >
                <NavDropdown title="Lớp" id="navbarScrollingDropdown">
                  {lop.map((item, i) => (
                    <NavDropdown.Item href="#action3" key={i}>
                      {item.tenlop}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="sidebar__menu__item">
            {/* <div className="sidebar__menu__item__icon">
              <i className="fa fa-sign-out" />
            </div> */}
            {/* <div className="sidebar__menu__item__txt">Logout</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Navba;
