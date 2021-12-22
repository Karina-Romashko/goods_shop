import React from "react";
import { Badge} from "antd";
import {Link} from "react-router-dom"
import css from "./styles.module.css"
import {ShoppingCartOutlined} from "@ant-design/icons"
// const IconFont = createFromIconfontCN({
//     scriptUrl: [
//       "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
//       "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", 
//     ],
//   });
  const cartOnClick = () => {};

export const Header = () =>{
    
    return(
        <div className={css.container} >
            <div className={css.wrapper}>
                <Link to={`/`}>  <img className={css.logo} src="https://oz.by/img/module-header/logo@2x.v1638191986.png" alt="" /> </Link>
            <div >
               <input className={css.search_inp} placeholder="Введите название товара"/>
               <button className={css.search_b} > <img src="https://oz.by/img/module-header/search_thin.v1638191986.svg"/> </button> 
            </div>            
            
            </div>  
            {/* <Badge  style={{marginRight:'20px' }} count={cart.length || null}>
              <button
                style={{ backgroundColor: "white", border: "none", marginRight: '20px'}}
                onClick={cartOnClick}
              >
                <IconFont
                  style={{ fontSize: 24, textAlign: "center" }}
                  type="icon-shoppingcart"
                />
              </button>
            </Badge>           */}
            <div className={css.cartAndLog}>
                
            <ShoppingCartOutlined style={{ fontSize:"35px", color:"gray", cursor:"pointer"}} />
            <button className={css.cart_b}>Войти</button>
            </div>
            
        </div>
    )
}