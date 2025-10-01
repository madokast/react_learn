import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import A01DisplayData from './a01_display_data';
import A02UseState from './a02_use_state';
import A03ShareData from './a03_share_data';
import A04Ranges from './a04_ranges';
import A06CtxFather from './a06_context/ctxFather'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <A01DisplayData />
    <hr />
    <A02UseState />
    <hr />
    <A03ShareData initialCount0={10} initialCount1={20} />
    <hr />
    <A04Ranges />
    <hr />
    <A06CtxFather />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
