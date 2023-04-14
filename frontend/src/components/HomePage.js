import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';

const HomePage = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome to AntraPlus</h1>
            <br />
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => navigate('/user')}>
                User
            </button>
            <button style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => navigate('/create-office')}>
                Public Office
            </button>
        </div>
    )
}

export default HomePage