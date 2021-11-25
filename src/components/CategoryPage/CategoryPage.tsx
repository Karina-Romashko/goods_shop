import React from "react";
import {useSelector} from "react-redux"
import {StoreSelectors} from "../../store"
import { Card1 } from "../Card";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const CategoryPage =()=>{
    const goodsCategories = useSelector(StoreSelectors.getGoodsCategories)
    const back = useNavigate();
    const {type} = useParams();
    const cat = goodsCategories.find((el)=> el.category.type===type)
    if(!cat){
        return <span>Sorry, there is no such category. Please, go <a onClick={()=>back(-1)}>Back</a> and  try something else. </span>
    }

    return(
        <div>
            <a onClick={()=>back(-1)}>Back</a>
            
            <h3 style={{ textAlign:"center", fontSize:"20px" }}>{cat.category.label} </h3>

         <div style={{display:'flex', justifyContent:"center"}}>
           {cat.items.map((item)=>(
               <Link to={`/${type}/${item.id}`}>
               <Card1  id={item.id} label={item.label} price={item.price} img={item.img} category_type={item.category_type}></Card1>
               </Link>
            
         ))}
         </div>


            </div>
    )
}