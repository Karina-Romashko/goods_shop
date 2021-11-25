import React from "react";
import {useSelector} from "react-redux"
import {StoreSelectors} from "../../store"
import { Card1 } from "../Card";
import { useNavigate, useParams } from "react-router-dom";

export const ProductPage = ()=>{
    const goodsCategories = useSelector(StoreSelectors.getGoodsCategories)
    const back = useNavigate();
    const {id} = useParams();
  //  const good = goodsCategories.find((el)=>el.items.find((el1)=>el1.id===id))
    if(!id){
        return <span>Sorry, there is no such product. Please, go <a onClick={()=>back(-1)}>Back</a> and  try something else. </span>
    }


    return(

        <div>
             <a onClick={()=>back(-1)}>Back</a>
             

        </div>
    )
}