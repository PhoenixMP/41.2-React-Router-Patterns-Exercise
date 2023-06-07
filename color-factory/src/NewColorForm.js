import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor, colors }) => {

    const INITIAL_STATE = { name: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();


    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData.name);
        setFormData(INITIAL_STATE);
        console.log(colors)
        navigate(-1);
    };



    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Type a Color Name:</label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add a new Color!</button>
        </form>
    );
};

export default NewColorForm;