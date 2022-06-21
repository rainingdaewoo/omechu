import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MemberItem = (props) => {
    console.log( props.member);
    const {id, username, email } = props.member;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                이메일: {email}
                <br/>
                <Link to={"/book/" + id} className="btn btn-primary">
                    상세보기
                </Link>
            </Card.Body>
        </Card>
    );
};

export default MemberItem;