import React, { useEffect, useState } from 'react';
import UserItem from '../../components/UserItem';

const Home = () => {

    const [users, setUsers] = useState([]);

    // 함수 실행 시 최초 한번 실행되는 것
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
        </div>
    );
};

export default Home;