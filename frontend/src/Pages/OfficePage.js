import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OfficePage = (props) => {
    const navigate = useNavigate()
    const [req, setReq] = useState('')
    const [title, setTitle] = useState('')
    const [fields, setFields] = useState([{ id: 0, value: '' }]);
    let fieldIdCounter = 1;
    const handleFieldChange = (event, id) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, value: event.target.value } : field
        );
        setFields(updatedFields);
    };

    const handleAddField = () => {
        setFields([...fields, { id: fieldIdCounter, value: '' }]);
        fieldIdCounter++;
    };

    const handleDeleteField = (id) => {
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);
    };
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
            <h1>Create a New Form</h1>
            <label htmlFor="title">Form Title: </label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter form title"
            />
            <br />
            <div>
                <h2>Form Fields:</h2>
                {fields.map((field) => (
                    <div key={field.id}>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(event) => handleFieldChange(event, field.id)}
                            placeholder="Enter field value"
                        />
                        <button onClick={() => handleDeleteField(field.id)}>Delete</button>
                    </div>
                ))}
                <button onClick={handleAddField}>Add New Field</button>
            </div>

            {/* <input
                type="text"
                value={req}
                onChange={handleReqChange}
                placeholder="Forms"
            ></input> */}
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={handleCreate}>
                Create A Form
            </button>
            <br />
            <button style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => navigate('/')}>
                Back to home
            </button>
        </div>


    )
}

export default OfficePage;