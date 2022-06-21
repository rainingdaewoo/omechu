import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }

    const submitUser = (e) => {
        e.preventDefault(); //submit이 action을 안 타고 자기 할일을 그만함.
        fetch("http://localhost:8080/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        })
            .then( res => {
                console.log(1, res);
                if( res.status === 201){
                    return res.json();     
                } else {
                   return null;
                }
            })
            .then( res => {
                if( res !== null ){
                    window.location.href = "/";
                } else {
                    alert("로그인에 실패하였습니다");
                }
        }).catch( (error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>로그인 창</h1>
            <Form onSubmit={submitUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control  type="email" placeholder="이메일을 적어주세요" onChange={changeValue} name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={changeValue} name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;