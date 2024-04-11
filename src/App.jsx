import { useState } from 'react'


import './App.css'


const express = require ('express');
const db = require('./db');

const app = express();
  app.use(express.json());

  app.listen(300, ()=> {
    console.log('Server is running an http://localhost:3000');
  });

  app.get('/api/v1/activities', async (req, res) => {

  });

  app.get('/api/v1/routines', async (req, res) => {

  });

const App=()=> {
  const [ , set] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App
