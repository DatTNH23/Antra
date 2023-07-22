import React, { useEffect, useState } from "react";

const UserPage = (props) => {

    const [values, setValues] = useState(Array(10).fill(''));

    const handleInputChange = (index, event) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };

    return (
        <div>
            {values.map((value, index) => (
                <div>
                    <input
                        key={index}
                        value={value}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder={index}
                    />
                    <br /></div>

            ))}
            <button>Submit Form</button>
        </div>
    );

}

export default UserPage;