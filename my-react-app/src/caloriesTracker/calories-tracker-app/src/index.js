import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppSignUp from './components/AppSignUp/AppSignUp';
import AppLogIn from './components/AppLogIn/AppLogIn';
import Calories from './components/CalorieCounter/CalorieApp';
import Settings from './components/AppSettings/AppSettings';
import Delete from './components/AppSettings/AppDeleteUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <div className='App'>
    <AppBar />
    <Routes>
      <Route path="/login" element={<AppLogIn/>}></Route>
      <Route path="/" element={<AppSignUp/>}></Route>
      <Route path="/caloriecounter" element={<Calories/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="/deleteusers" element={<Delete/>}></Route>
    </Routes>
    </div>
  </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();