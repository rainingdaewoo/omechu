import React, { useEffect, useState } from 'react';
import MemberItem from '../../components/MemberItem';

const Home = () => {

    const [members, setMembers] = useState([]);


    

    // 함수 실행 시 최초 한번 실행되는 것
    useEffect(() => {
        console.log("teste4st", localStorage.getItem("token"));
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMembers(res);
            }); // 비동기 함수
    }, []);

    return (
        <div>
            {members.map( member => (
                <MemberItem key={member.id} member={member}/> 
            ))}
        </div>
    );
};

export default Home;