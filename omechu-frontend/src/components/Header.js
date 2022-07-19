import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginCheck, setLoginCheck] = useState("");

    const goMypage = () => {

        // 토큰이 없거나 토큰 유효기간이 만료되었을 때는 로그인 화면으로 이동
        if (localStorage.getItem("token") === null) {
            alert("로그인 해주세요.");
            document.location.href = "/loginForm";
          };
        };

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setLoginCheck(true);
            // console.log("로그인: " + loginCheck);
            // console.log("token: " + localStorage.getItem("token"));
          } else {
            setLoginCheck(false);
            // fetchData();
          }
        }, []);    
        






    return (
        <>
          <Navbar key="false" bg="dark"  variant="dark" expand="false" className="mb-3">
          <Container fluid>
          
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} /> &nbsp;
          <Link to="/" className="navbar-brand">
              omechu
          </Link>
          &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp; &nbsp;   &nbsp;
          &nbsp;   &nbsp;    &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;
          &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;
          &nbsp;   &nbsp;  &nbsp;   &nbsp; &nbsp;   &nbsp;  &nbsp;   &nbsp;
          
          &nbsp;   &nbsp;
          &nbsp;   &nbsp;

         
         
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  유튜브 목록
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
              <Button variant="outline-success">Search</Button>
            </Form>
            &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;    &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;    &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;    &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp; &nbsp;   &nbsp;
            &nbsp;   &nbsp;    &nbsp;  
          
            
            { loginCheck ? 
                (<Link to="/myPage" className="nav-link" onClick={goMypage} style={{ color: "white" }}>내 정보</Link>) 
                : 
                (<Link to="/loginForm" className="nav-link" style={{ color: "white" }}>로그인</Link>)
            }
            <Link to="/saveForm" className="nav-link" style={{ color: "white" }}>영상 추가</Link>
          
          </Container>
        </Navbar>
      <br />
    </>
    );
};

export default Header;