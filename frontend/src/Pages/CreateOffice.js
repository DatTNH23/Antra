import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreatOffice = (props) => {
    const navigate = useNavigate()
    const handleNameChange = (event) => {
        props.setNameAuth(event.target.value)
    }
    const handleCreate = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "name": props.name_Auth
            }),
        };
        try {
            const response = await fetch("http://127.0.0.1:8000/api/create-office", requestOptions)
            const data = await response.json()
            console.log(data)
            props.setOffice_id(data.id)
            navigate(`/office`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Create an Office</h1>
            <input
                type="text"
                value={props.name_Auth}
                onChange={handleNameChange}
            ></input>
            <button style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={handleCreate}>
                Create
            </button>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => navigate('/')}>
                Back to home
            </button>
        </div>
    )
}
export default CreatOffice