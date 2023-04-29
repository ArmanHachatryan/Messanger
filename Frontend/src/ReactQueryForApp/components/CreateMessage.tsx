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

    const OnChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const OnSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        mutation.mutate(formData)
        e.preventDefault();
        setFormData(defaultData);
    }

    return ( 
        <>
        <form onSubmit={OnSubmit}>
            <label htmlFor='name'>Ваше имя</label>
            <p><input type="text" id="sender" required value={sender} onChange={OnChange}/></p>

            <label htmlFor='text'>Ваш текст сообщения</label>
            <p><textarea id="text" required value={text}  onChange={OnChange}/></p>
            

            <label htmlFor='phoneNumber'>Номер на который хотите позвонить</label>
            <p><input type="text" id="phoneNumber" required value={phoneNumber} onChange={OnChange}/></p>

            <button type="submit">Send message</button>
        </form>    
        </>
    )
}