import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = (props) => {

    const [book, setBook] = useState({
        title: "",
        author: "",
    });

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });

    }

    const submitBook = (e) => {
        e.preventDefault(); //submit이 action을 안 타고 자기 할일을 그만함.
        fetch("http://localhost:8080/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(book)
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
                    alert("도서 등록에 실패하였습니다");
                }
        }).catch( (error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>책 등록하기</h1>
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>책 제목</Form.Label>
                    <Form.Control  type="text" placeholder="책 제목 적어주세요" onChange={changeValue} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>저자</Form.Label>
                    <Form.Control  type="text" placeholder="저자 이름을 적어주세요" onChange={changeValue} name="author"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    글쓰기
                </Button>
            </Form>
        </div>
    );
};

export default SaveForm;