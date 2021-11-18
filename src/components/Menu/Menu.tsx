import React from "react";
import {Menu} from "antd"
import { Link } from "react-router-dom";


interface MenuProps {
categories:{id:number, type:string, label:string }[];

}


 export const Menu1:React.FC<MenuProps> = ({categories, })=>{
    return(
        <div>
            <Menu style={{margin:" 0px 10px" , padding:"0px 10px"}} >
                
                { categories.map((category) => {
                    return(
                         <Menu.Item style={{marginBottom:'4px'}} key={category.id} >
                             <Link to="#" >{category.label} </Link>
                         </Menu.Item>
                    )
                })

                }
           
           
            
        </Menu>
        </div>
        
    )
 }