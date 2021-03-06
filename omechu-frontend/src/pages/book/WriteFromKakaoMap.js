import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';


const WriteFromKakaoMap = (props) => {

    let [boardFromYoutube, setBoardFromYoutube] = useState({
        storeName: "",
        youtubeURL: "",
        storeNaverURL: "",
        storeAddress: "",
        youTuber: "",
    });

    const [kakaoAddress, setKakaoAddress] = useState('');

    const changeValue = (e) => {
        // setBoardFromYoutube({
        //     ...boardFromYoutube,
        //     [e.target.name]: e.target.value,
        //     storeAddress: kakaoAddress,
        // });
        const {name, value} = e.target;
        setBoardFromYoutube({
            ...boardFromYoutube,
            [name]: value
        })    

    }

    const submitContent = (e) => {
        e.preventDefault(); //submit이 action을 안 타고 자기 할일을 그만함.
        
        console.log(boardFromYoutube);
        axios.post("http://localhost:8080/youtubeContent/", JSON.stringify(boardFromYoutube), { 
            headers: { 
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            })
                .then( (result) => {
                    console.log(result);
                    window.location.href = "/";
                })
                .catch( (error) => {
                    console.log(error);
                    if( error.response.data.message === "잘못된 요청입니다."){
                        alert("필수 값이 빠졌습니다. 다시 확인해주세요.");
                    }
                });;
    }
    
    const handle = (data) => {
        setKakaoAddress(data.address);
        setBoardFromYoutube({
            ...boardFromYoutube,
            storeAddress: data.address
        });
        
        console.log(boardFromYoutube);

    };

    return (
        <div>
            <h1>새로운 맛집 등록</h1>
            <Form onSubmit={submitContent}>
                <Form.Group className="mb-3">
                    <Form.Label>가게 이름</Form.Label>
                    <Form.Control  type="text" placeholder="가게 이름을 적어주세요" onChange={changeValue} name="storeName" />
                </Form.Group>

                <FloatingLabel className="mb-3" controlId="selectYoutuber" label="유튜버">
                    <Form.Select onChange={changeValue} name="youTuber" aria-label="Floating label select">
                        <option value=''>어떤 유튜버인가요?</option>
                        <option value='성시경 SUNG SI KYUNG'>성시경 SUNG SI KYUNG</option>
                        <option value='먹보스 쭈엽이'>먹보스 쭈엽이</option>
                        <option value='김사원세끼'>김사원세끼</option>
                    </Form.Select>
                </FloatingLabel>

                <Form.Group className="mb-3">
                    <Form.Label>영상 링크</Form.Label>
                    <Form.Control  type="text" placeholder="유튜브 링크(ex, https://www.youtube.com/watch?...)" onChange={changeValue} name="youtubeURL"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>가게 링크(네이버)</Form.Label>
                    <Form.Control  type="text" placeholder="네이버 링크(ex, https://www.youtube.com/watch?...)" onChange={changeValue} name="storeNaverURL"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>가게 주소(아래에서 주소를 검색해주세요.)</Form.Label>
                    <Form.Control type="text" placeholder="가게 주소" onChange={changeValue} value={kakaoAddress || ""} readOnly/>
                </Form.Group>

                <Div>
                <DaumPostcode 
                    onComplete={handle}       // 값 선택 시 실행되는 이벤트
                    autoClose={false}                       // 값 선택 시 자동 닫힘 설정
                />
                </Div>
                
                <Button variant="primary" type="submit">
                    등록
                </Button>
            </Form>
            
        </div>
    );
};

const Div = styled.div`
   border:1px solid silver;
   margin-bottom: 10;
`;
// 게시판 영상 제목, 영상 URL, 유튜버, 가게 이름, 가게 URL
export default WriteFromKakaoMap;