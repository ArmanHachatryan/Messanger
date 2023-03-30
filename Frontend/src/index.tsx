import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchData from './FetchData';
import PostForm from './PostForm';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostForm/>
    <FetchData/>
  </React.StrictMode>
);