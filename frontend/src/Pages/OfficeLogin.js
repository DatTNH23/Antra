import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const OfficeLogin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const baseURL = 'http://127.0.0.1:8000/api/get-public-office';
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await fetch(baseURL + `?name=${searchTerm}`)
            if (response.status == 200)
                navigate('/office')
        } catch (error) {
            //window.alert('Office is not existed');
            console.log(error)
        }
    };

    return (
        <div>
            <h1>Login to office</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter the name to login"
            />
            <button onClick={handleSearch}>Search</button>
            <br></br>
            <button style={{ backgroundColor: 'green', color: 'white' }}
                onClick={() => navigate('/create-office')}>
                Create new Office
            </button>
        </div>
    );
};

export default OfficeLogin;
