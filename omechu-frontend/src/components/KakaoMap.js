// MapContainer.js
// [[React] 함수형 컴포넌트에서 카카오 지도 API 사용하기], https://gingerkang.tistory.com/65 참고하여 작성
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import data from "../data/data.js"

const { kakao } = window;

const KakaoMap = () => {

    let [store] = useState(data);

    useEffect(() => {

        let mapContainer = document.getElementById('map'), // 지도를 표시할 div 

        mapOption = {
            center: new kakao.maps.LatLng(37.5609532, 126.9789347), // 지도의 중심좌표(시청)
            level: 8 // 지도의 확대 레벨
        };  
        
    
        // 지도 생성   
        let map = new kakao.maps.Map(mapContainer, mapOption); 
        var clickedOverlay = null;
        store.forEach(store => {

            // 주소-좌표 변환 객체
            let geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표 검색
            geocoder.addressSearch(store.address, function(result, status) {
                
            // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
            
                    let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
                    // 마커 이미지 주소
                    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                    
                    // 마커 이미지 크기
                    var imageSize = new kakao.maps.Size(24, 35); 
                    
                    // 마커 이미지 생성    
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

                    // 결과값으로 받은 위치를 마커로 표시
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: coords,                 // 마커 표시 위치
                        title : store.storeName,          // 마커 타이틀, 마커에 마우스를 올리면 타이틀이 표시
                        image : markerImage               // 마커 이미지
                    });

                    let content = '<div class="wrap">' + 
                                    '    <div class="info">' + 
                                    '        <div class="title">' + 
                                                store.storeName + 
                                    '            <button onclick="closeOverlay()" title="닫기">X</button>' + 
                                    '        </div>' + 
                                    '        <div class="body">' + 
                                    '            <div class="desc">' + 
                                    '                <div class="ellipsis">' + store.address + '</div>' + 
                                    '                <div><a href=' + store.storeNaverUrl  + 'target="_blank" class="link">네이버 페이지</a></div>' + 
                                    '            </div>' + 
                                    '        </div>' + 
                                    '    </div>' +    
                                    '</div>';
                                         
                    

                    // kakao.maps.event.addListener(marker, 'click', function() {
                    //     console.log(store);
                    // });
                    
                    kakao.maps.event.addListener(marker, 'click', function() {

                        var CustomOverlay  = new kakao.maps.CustomOverlay({
                            content: content,
                            map: map,
                            position: marker.getPosition()       
                       });

                        if (clickedOverlay) {
                            clickedOverlay.setMap(null);
                        }
                        CustomOverlay.setMap(map);
                        clickedOverlay = CustomOverlay;
                      });

                     // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
                    function closeOverlay() {
                        clickedOverlay.setMap(null);     
                    } 
                }

               
            });
        });
    
    }, []);

    return (
        <>
        <div class="close"  title="닫기"></div>
            <StoredMap id="map" />
            
        </>
    );
}

const StoredMap = styled.div`
    width: 1200px;
    height: 800px;
`;



export default KakaoMap;