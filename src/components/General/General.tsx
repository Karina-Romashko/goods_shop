import React from "react";
import {Menu1} from "../Menu"
import {Footer} from "../Footer"
import css from "./styles.module.css"
import {GoodsCategory} from "../GoodsCategory"
import { Header } from "../Header";




export const General = ()=>{


    return(
        <div className={css.container}>
            <Header/>
            <div className={css.content}>
                <div style={{display:'flex', padding:'18px' }}>
            <Menu1  /> 
            <img style={{width:'100%', height:'488px'}} src="https://cdn.ren.tv/cache/960x540/media/img/7d/4e/7d4e1c868f36e52de337b474dd6d9f1953072c8e.jpg" alt="" />
            </div>
            <GoodsCategory/>
            </div>
            

            <Footer/>

</div>
            
        
    );
}