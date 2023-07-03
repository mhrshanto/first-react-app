import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './FunctionalComponenr/Home'
import About from './ClassComponent/About'
import Clipboard from './FunctionalComponenr/Clipboard'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home name="Md Habibur Rahman" age="23" profession="Web Developer" />
    <Home name="Muhammad Habib" age="21" profession="Student" />
    <About />
    <Clipboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
