/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/

const express = require('express')
const app = express()

const {PORT} = require ('./constants')


//import routes

const authRoutes = require('./routes/auth')

//initialize routes 
app.use('/api', authRoutes)
//APP start

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running on https://localhost:${PORT}`)
    })
  } catch (error){
    console.log(`Error: ${error.message}`)

  }
}

appStart()

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
