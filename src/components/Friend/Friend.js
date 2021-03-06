import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const{name,email,id}=props.friend;
    const friendStyle={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h3>name:{name}</h3>
            <h5>email:{email}</h5>
            <p>id:<Link to={`/friend/${id}`}>show details of {id}</Link></p>
        </div>
    );
};

export default Friend;