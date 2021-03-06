import React from "react";
import {useSelector} from "react-redux"
import { Card1 } from "../Card";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import css from "./styles.module.css"
import { Header } from "../Header";
import {StoreSelectors} from "../../store/goodsSlice"


export const CategoryPage =()=>{
    const goodsCategories = useSelector(StoreSelectors.getGoods)
    
    const back = useNavigate();
    const {type} = useParams();
    const cat = goodsCategories.find((el)=> el.category.type===type)
    if(!cat){
        return <span>Данной категории не существует. Вернуться <a onClick={()=>back(-1)}>назад</a>  </span>
    }

    return(
        <div className={css.container}>
            <div className={css.content}>
                <Header/>
                <a onClick={()=>back(-1)} style={{color:"rgba(0, 0, 0, 0.85)", fontSize:"16px", margin:"20px"}}>Вернуться назад</a>
            
            <h3 style={{ textAlign:"center", fontSize:"20px" }}>{cat.category.label} </h3>

         <div style={{display:'flex', justifyContent:"center"}}>
           {cat.items.map((item)=>(
               <Link to={`/${type}/${item.id}`}>
               <Card1  id={item.id} label={item.label} price={item.price} description={item.description} img={item.img} category_type={item.category_type}></Card1>
               </Link>
            
         ))}
         </div>
            </div>
            

            <Footer/>
            </div>
    )
}