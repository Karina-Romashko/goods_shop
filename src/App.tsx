import React from 'react';
import 'antd/dist/antd.css';
import {General} from "./components/General"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";




export function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<General/>} />
    </Routes>
    
  </Router> 

      
    
  )

} 
  


export default App;


