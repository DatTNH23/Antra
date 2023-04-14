import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OfficePage = (props) => {
    const navigate = useNavigate()
    const [req, setReq] = useState('')
    const [title, setTitle] = useState('')
    const handleReqChange = (event) => {
        setReq(event.target.value);
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleCreate = async () => {
        const data = req.split(",")
        try {
            const requestForm = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "title": title,
                    "office_id": props.office_id
                }),
            };
            const responseForm = await fetch("http://127.0.0.1:8000/api/create-form", requestForm)
            const Form = await responseForm.json()
            const formID = Form.id
            console.log("Form ", Form)
            console.log(data)
            for (let field of data) {
                const requestForm = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "field_name": field,
                        "form_id": formID
                    }),
                };
                const response = await fetch("http://127.0.0.1:8000/api/create-field", requestForm)
                const responseJSON = await response.json()
                console.log(responseJSON)
            }
            setReq('')
            setTitle('')
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div>
            <h1>Welcome {props.name_Auth}</h1>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
            ></input>
            <input
                type="text"
                value={req}
                onChange={handleReqChange}
                placeholder="Forms"
            ></input>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={handleCreate}>
                Create A Form
            </button>
            <button style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => navigate('/')}>
                Back to home
            </button>
        </div>


    )
}

export default OfficePage;