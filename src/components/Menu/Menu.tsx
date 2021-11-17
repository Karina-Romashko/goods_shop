import React from "react";
import {Menu} from "antd"


interface MenuProps {
categories:{id:number, type:string, label:string }[];

}


 export const Menu1:React.FC<MenuProps> = ({categories, })=>{
    return(
        <div>
            <Menu >
                
                { categories.map((category) => {
                    return(
                         <Menu.Item style={{marginBottom:'4px'}} key={category.id} ><a href="#">{category.label}</a></Menu.Item>
                    )
                })

                }
           
           
            
        </Menu>
        </div>
        
    )
 }