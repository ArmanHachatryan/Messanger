import axios from 'axios';
import React from 'react'
import { useState} from "react"

const defaultData = {
    textMessage: "",
    phoneNumber: "",
    userName: "",
}
export default function PostForm() {
    const [formData, setFormData] = useState(defaultData);

    const {textMessage, phoneNumber, userName} = formData

    
    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const OnSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://localhost:44352/api/Home", formData);
            console.log(response)
        } catch (error) {
    
        }

        setFormData(defaultData)
    }


     
  return (
    
    <div>
        <h2>PostForm</h2>
        <p>Send a letter</p>

        <form onSubmit={OnSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id="userName" value={userName} onChange={OnChange}/>

            <label htmlFor='textMessage'>Text</label>
            <input type="text" id="textMessage" value={textMessage} onChange={OnChange}/>

            <label htmlFor='phoneNumber'>Number</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={OnChange}/>

            <button type="submit">Send message</button>
        </form>    
    </div>
  )
}
