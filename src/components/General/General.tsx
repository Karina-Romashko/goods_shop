import React from "react";
import {Menu1} from "../Menu"
import {Footer} from "../Footer"
import {Card1} from "../Card"
import css from "./styles.module.css"
import {useSelector} from "react-redux"
import {StoreSelectors} from "../store"


interface GeneralProps{

}

export const General:React.FC<GeneralProps> = ()=>{
const categories = useSelector(StoreSelectors.getCategories)
const goodsCategories = useSelector(StoreSelectors.getGoodsCategories)


    return(
        <div className={css.container}>
            <div style={{display:'flex', padding:'18px' }}>
            <Menu1 categories={categories} /> 
      <img style={{width:'100%', height:'488px'}} src="https://cdn.ren.tv/cache/960x540/media/img/7d/4e/7d4e1c868f36e52de337b474dd6d9f1953072c8e.jpg" alt="" />
    </div>
     {goodsCategories.map((cat)=>(
       <section>
        
           <h3 style={{ textAlign:"center", fontSize:"20px" }}>{cat.category.label} </h3>

         <div style={{display:'flex', justifyContent:"center"}}>
           {cat.items.map((item)=>(
            <Card1  id={item.id} label={item.label} price={item.price} img={item.img} category_type={item.category_type}></Card1>
         ))}
         </div>
         
       </section>
     ))}


            <Footer/>

</div>
            
        
    );
}