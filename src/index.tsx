import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {store} from "./store/store"
import {General} from "./components/General"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CategoryPage } from './components/CategoryPage';
import { ProductPage } from './components/ProductPage';



ReactDOM.render(

 <Provider store={store}>
    <Router>
     <Routes>
      <Route path="/" element={<General/>} />
      <Route path="/:type/:id" element={<ProductPage/>} />
      <Route path="/:type" element={<CategoryPage/>} />
     </Routes>
    
  </Router> 

   <App/>
 </Provider> 
,

  document.getElementById('root')
);

