import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalContextType from './Context/globalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let globalState = localStorage.getItem("cookie");
if (globalState == null){
  localStorage.setItem('cookie',"0");
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
