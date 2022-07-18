import React, { useEffect, useState } from 'react';
import KakaoMap from '../../components/KakaoMap';
import UserItem from '../../components/UserItem';

const Home = () => {

    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        //console.log("teste4st", localStorage.getItem("token"));
        fetch("http://localhost:8080/user", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
                setUsers(res);
            }); // 비동기 함수
    }, []);

    return (
        <div>
            {users && users.map( user => (
                <UserItem key={user.id} user={user}/> 
            ))}
            <KakaoMap></KakaoMap>
        </div>
    );
};

export default Home;