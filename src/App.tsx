import React from 'react';
import 'antd/dist/antd.css';
import {General} from "./components/General"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CategoryPage } from './components/CategoryPage';
import { ProductPage } from './components/ProductPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
  return(
    <Router>
     <Routes>
    
      <Route path="/" element={<General/>} />
      <Route path="/:type/:id" element={<ProductPage/>} />
      <Route path="/:type" element={<CategoryPage/>} />
     
     </Routes>
    
  </Router> 
 
  )

} 
  
export default App;


