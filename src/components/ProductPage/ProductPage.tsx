import React from "react";
import {useSelector} from "react-redux"
import {StoreSelectors} from "../../store"
import { Card1 } from "../Card";
import { useNavigate, useParams } from "react-router-dom";

export const ProductPage = ()=>{
    const goodsCategories = useSelector(StoreSelectors.getGoodsCategories)
    const back = useNavigate();
    const {type, id} = useParams();
   const good = goodsCategories.find((category) => category.category.type === type)?.items.find((item) => item.id === Number(id));
    if(!good){
        return <span>Sorry, there is no such product. Please, go <a onClick={()=>back(-1)}>Back</a> and  try something else. </span>
    }


    return(

        <div>
             <a onClick={()=>back(-1)}>Back</a>
             <Card1  id={good.id} label={good.label} price={good.price} img={good.img} category_type={good.category_type}></Card1>

        </div>
    )
}