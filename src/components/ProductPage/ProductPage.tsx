import React from "react";
import {useSelector} from "react-redux"
//import {StoreSelectors} from "../../store/categoriesSlice"
import {StoreSelectors} from "../../store/goodsSlice"
import { Card1 } from "../Card";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../Footer";
import css from "./styles.module.css";
import { Header } from "../Header";


export const ProductPage = ()=>{
    const goodsCategories = useSelector(StoreSelectors.getGoods)
    const back = useNavigate();
    const {type, id} = useParams();
   const good = goodsCategories.find((category) => category.category.type === type)?.items.find((item) => item.id === Number(id));
    if(!good){
        return <span>Данного продукта не существует. Вернуться  <a onClick={()=>back(-1)}>назад</a>. </span>
    }


    return(

        <div className={css.container}>
            <div className={css.content}>
                <Header/>
                <div className={css.link}>
                    <a onClick={()=>back(-1)} className={css.back_link}> Вернуться назад</a>
                </div>
           
             <Card1  id={good.id} label={good.label} price={good.price} description={good.description} img={good.img} category_type={good.category_type}></Card1>
            </div>
             
        <Footer/>
        </div>
    )
}