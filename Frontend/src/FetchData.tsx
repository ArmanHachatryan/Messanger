import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface MessageData{
  id: string,
  text: string,
  phoneNumber: number,
  dateTime: string,
  status: number

}

export default function FetchData() {
  const [data, setData] = useState<MessageData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const response = await axios.get("https://localhost:44352/api/Home");

        setData(response.data);
    };

    fetchPosts();
  }, []);


  return (
    <>
      <h2>FetchingData GET-Query</h2>
      {data.map((post)=> {
        const {id, text, phoneNumber, dateTime, status} = post;

        return (
          <article key={id}>
            <p>{dateTime}, {text}, {phoneNumber}, {status}</p>
          </article>
        )
      })}
  </>
  )

}
