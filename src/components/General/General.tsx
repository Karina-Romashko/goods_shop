import React from "react";
import {Menu1} from "../Menu"
import {Footer} from "../Footer"
import css from "./styles.module.css"
import {GoodsCategory} from "../GoodsCategory"
import { Header } from "../Header";
// import { Carousel } from 'antd';



export const General = ()=>{
    // const contentStyle = {
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   };

    return(
        <div className={css.container}>
            <Header/>
            <div className={css.content}>
                <div style={{display:'flex', padding:'18px' }}>
            <Menu1  /> 
            
  <img style={{width:'100%', height:'498px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/1280px-Books_HD_%288314929977%29.jpg" alt="" />
           
            </div>
            <GoodsCategory/>
            </div>
            

            <Footer/>

</div>
            
        
    );
}