import React from "react";
import {Card1} from "../Card"
import {useSelector} from "react-redux"
import {StoreSelectors} from "../../store"
import {Link} from "react-router-dom"



export const GoodsCategory = () =>{

    const goodsCategories = useSelector(StoreSelectors.getGoodsCategories)
    return(
            <div>
                {goodsCategories.map((cat)=>(
       <section>
        
           <h3 style={{ textAlign:"center", fontSize:"20px" }}>{cat.category.label} </h3>

         <div style={{display:'flex', justifyContent:"center"}}>
           {cat.items.map((item)=>(
               <Link to={`/${item.category_type}/${item.id}`}>
            <Card1  id={item.id} label={item.label} price={item.price} img={item.img} category_type={item.category_type}></Card1>
                </Link>
         ))}
         </div>
         
       </section>
     ))}


            </div>
    )
}