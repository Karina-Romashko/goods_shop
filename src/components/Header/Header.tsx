import React from "react";
import {Link} from "react-router-dom"
import css from "./styles.module.css"


export const Header = () =>{
    return(
        <div className={css.container} >
            <div className={css.wrapper}>
                <Link to={`/`}>  <img src="https://oz.by/img/module-header/logo@2x.v1638191986.png" alt="" /> </Link>
            <div >
               <input className={css.search_inp}/>
               <button className={css.search_b} > <img src="https://oz.by/img/module-header/search_thin.v1638191986.svg"/> </button> 
            </div>            
            
            </div>            
            <button className={css.cart_b}>Корзина</button>
        </div>
    )
}