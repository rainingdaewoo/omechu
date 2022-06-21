import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Detail = (props) => {
    const propsParam = useParams();
    const id = propsParam.id;

    const [member, setMember] = useState({
        id: "",
        email: "",
        role: ""
    });

    useEffect( () => {
        fetch("http://localhost:8080/member/" + id).then( res => res.json() ).then( res => {
            setMember(res);
        });
    }, [])

    const deleteMember = () => {
        fetch('http://localhost:8080/member/' + id, {
            method: 'DELETE',
        })
            .then((res) => res.text())
            .then((res) => {
                if (res === 'OK') {
                    window.location.href = "/";
                } else {
                alert('삭제실패');
                }
            });
        };
    
    const updateMember = () => {
        window.location.href = "/updateForm/" + id; // 페이지 이동이 되어버림 나중에 변경 필요
        //props.history.push('/updateForm/' + id);
    }

    return (
        <div>
            <h1>상세보기</h1>
            <Button onClick={ updateMember }>수정</Button>
            {" "}
            <Button onClick={ deleteMember }>삭제</Button>
            <hr />
            <h3>{member.email}</h3>
            <h1>{member.role}</h1>

        </div>
    );
};

export default Detail;