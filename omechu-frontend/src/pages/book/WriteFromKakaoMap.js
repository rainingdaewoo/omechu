import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';

const WriteFromKakaoMap = (props) => {

    const [boardFromYoutube, setBoardFromYoutube] = useState({
        storeName: "",
        youtubeLink: "",
        storeAddress: ""
    });
    const [storeAddress, setStoreAddress] = useState();

    const changeValue = (e) => {
        setBoardFromYoutube({
            ...boardFromYoutube,
            [e.target.name]: e.target.value
        });

    }

    const submitContent = (e) => {
        e.preventDefault(); //submit이 action을 안 타고 자기 할일을 그만함.
        console.log(boardFromYoutube);
    }

    const handle = {
        // 주소 선택 이벤트
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
            `)
            setStoreAddress(data.address);
        },
    }

    return (
        <div>
            <h1>새로운 맛집 등록</h1>
            <Form onSubmit={submitContent}>
                <Form.Group className="mb-3">
                    <Form.Label>가게 이름</Form.Label>
                    <Form.Control  type="text" placeholder="가게 이름을 적어주세요" onChange={changeValue} name="storeName" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>영상 링크</Form.Label>
                    <Form.Control  type="text" placeholder="유튜브 링크(ex, https://www.youtube.com/watch?...)" onChange={changeValue} name="youtubeLink"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>영상 링크</Form.Label>
                    <Form.Control type="text" placeholder="가게 주소" onChange={changeValue} name="storeAddress"  value={storeAddress} disabled/>
                </Form.Group>

                <DaumPostcode 
                    onComplete={handle.selectAddress}       // 값을 선택할 경우 실행되는 이벤트
                    autoClose={false}                       // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                />

                <Button variant="primary" type="submit">
                    등록
                </Button>
            </Form>
            
        </div>
    );
};
// 게시판 영상 제목, 영상 URL, 유튜버, 가게 이름, 가게 URL
export default WriteFromKakaoMap;