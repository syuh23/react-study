import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // 여기가 App이라서 (같은 디렉토리의 App.js 파일을 import 한 것)
import reportWebVitals from './reportWebVitals';

// 이 밑의 코드들은... root라는 ID 값을 가진 태그에 해당 내용을 랜더링 하라는 뜻 !!
// root라는 태그는 어디에 있을까? ->  public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
