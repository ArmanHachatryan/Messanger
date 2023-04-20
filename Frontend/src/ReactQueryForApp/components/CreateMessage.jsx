import React, { useState } from 'react';
import useCreateMessage from '../query-hooks/useCreateMessage';

const defaultData = {
    text: "",
    phoneNumber: "",
    sender: "",
}

export default function CreateMessage() {
    const mutation = useCreateMessage()
    const [formData, setFormData] = useState(defaultData);

    const {text, phoneNumber, sender} = formData

    const OnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const OnSubmit = async (e) => {
        mutation.mutate(formData)
        e.preventDefault();
        setFormData(defaultData);
    }

    return ( 
        <>
        <form onSubmit={OnSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id="sender" required value={sender} onChange={OnChange}/>

            <label htmlFor='text'>Text</label>
            <textarea id="text" required value={text}  onChange={OnChange}/>
            

            <label htmlFor='phoneNumber'>Number</label>
            <input type="text" id="phoneNumber" required value={phoneNumber} onChange={OnChange}/>

            <button type="submit">Send message</button>
        </form>    
        </>
    )
}