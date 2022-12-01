import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// you do not need this as you add the CDN in index.html. I you do not add CDN for CSS in index.html , uncomment import statement below
// import 'bootstrap/dist/css/bootstrap.min.css'; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   
    <App />
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

