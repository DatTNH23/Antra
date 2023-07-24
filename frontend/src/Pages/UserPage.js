import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
const UserPage = (props) => {
    const [formsList, setFormsList] = useState([])
    const baseURL = 'http://127.0.0.1:8000/api/';

    const handleSearch = async (searchTerm) => {
        try {
            const office = await fetch(baseURL + `get-public-office?name=${searchTerm}`)
            const jsonOffice = await office.json()
            const forms = await fetch(baseURL + `get-form?id=${jsonOffice.id}`)
            const jsonForms = await forms.json()
            setFormsList(jsonForms)
        } catch (error) {
            //window.alert('Office is not existed');
            console.log(error)
        }
    }
    useEffect(() => {

    }, [formsList]);
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <br />
            {formsList.map((value, index) => (
                <button style={{ marginRight: '5px', background: 'green' }}>
                    {value.title}
                </button>
            ))}
        </div>
    );

}

export default UserPage;