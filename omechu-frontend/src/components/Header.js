import React, { useEffect } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    const goMypage = () => {

        // 토큰이 없거나 토큰 유효기간이 만료되었을 때는 로그인 화면으로 이동
        if (localStorage.getItem("token") === null) {
            alert("로그인 해주세요.");
            document.location.href = "/loginForm";
          } else {

          };
        };

    useEffect(() => {
     
        localStorage.clear();
        console.log(localStorage.getItem("token"));
        }, []);    
        






    return (
        <>
    <Navbar bg="dark" variant="dark">
    <Container fluid>
        <Link to="/" className="navbar-brand">
            omechu
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>

            
        </Form>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Link to="/loginForm" className="nav-link">로그인</Link>
            <Link to="/saveForm" className="nav-link">글쓰기</Link>
            <Link to="/myPage" className="nav-link" onClick={goMypage} >내 정보</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    <br />
    </>
    );
};

export default Header;