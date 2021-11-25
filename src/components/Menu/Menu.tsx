import React from "react";
import {Menu} from "antd"
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import {StoreSelectors} from "../../store"





 export const Menu1 = ()=>{

    const categories = useSelector(StoreSelectors.getCategories)
    return(
        <div>
            <Menu style={{margin:" 0px 10px" , padding:"0px 10px"}} >
                
                { categories.map((category) => {
                    return(
                         <Menu.Item style={{marginBottom:'4px'}} key={category.id} >
                             <Link to={`/${category.type}`} >{category.label} </Link>
                         </Menu.Item>
                    )
                })

                }
           
           
            
        </Menu>
        </div>
        
    )
 }