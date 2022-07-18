// MapContainer.js
// [[React] 함수형 컴포넌트에서 카카오 지도 API 사용하기], https://gingerkang.tistory.com/65 참고하여 작성
import React, { useEffect } from 'react';
import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {

    useEffect(() => {
        const container = document.getElementById('result');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <>
            <StoredMap id="result" />
        </>
    );
}

const StoredMap = styled.div`
    width: 800px;
    height: 800px;
`;



export default KakaoMap;