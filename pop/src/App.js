import './App.css'
import axios from "axios"
import Files from './components/Files'
import { useState } from 'react'
import { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/Home'
import Docs from './components/Docs'

const API_URL = "http://localhost:3000/api/v1/books"


function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  // const [files, setFiles] = useState([])

  // useEffect(() => {
  //   let mounted = true 
  //   getAPIData().then((items) => {
  //     if (mounted) {
  //       setFiles(items)
  //     }
  //   })
  //   return () => {
  //     (mounted = false)
  //   }
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Docs />}/>
      </Routes>
    </Router>
  );
}

export default App;
