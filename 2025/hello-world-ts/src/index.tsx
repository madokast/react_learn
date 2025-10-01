import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import A01DisplayData from './a01_display_data';
import A02UseState from './a02_use_state';
import A03ShareData from './a03_share_data';
import A04Ranges from './a04_ranges';
import A06CtxFather from './a06_context/ctxFather'
import A01CssModule from './a07_css/a01_css_module/index';
import A02Styled from './a07_css/a02_styled';
import A09Input from './a09_input';
import A10Effect from './a10_effect';
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
    <hr />
    <div><A01CssModule /><A02Styled /></div>
    <hr style={{clear: 'both'}} />
    <A09Input />
    <hr />
    <A10Effect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
