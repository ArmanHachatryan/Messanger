import axios from 'axios';
import React from 'react'
import { useState} from "react"

const defaultData = {
    text: "",
    phoneNumber: "",
    sender: "",
}
export default function PostForm() {
    const [formData, setFormData] = useState(defaultData);

    const {text, phoneNumber, sender} = formData

    
    const OnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
        setFormData(defaultData);
    }


     
  return (
    
    <div>
        <h2>Data Fetching - Set Data</h2>

        <p>Send a letter</p>

        <form onSubmit={OnSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id="sender" required value={sender} onChange={OnChange}/>

            <label htmlFor='text'>Text</label>
            <textarea id="text" required value={text}  onChange={OnChange}/>
            

            <label htmlFor='phoneNumber'>Number</label>
            <input type="text" id="phoneNumber" required value={phoneNumber} onChange={OnChange}/>

            <button type="submit">Send message</button>
        </form>    
    </div>
  )
}
