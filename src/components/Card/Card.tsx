import React from "react";
import { Card } from 'antd';

interface CardProps{
id:number;
category_type: string;
label: string;
price: number;
img:string;
}


export const Card1:React.FC<CardProps> = ({id, label, price, img}) =>{
     return(
      
    <Card
        hoverable
        style={{ width: 240, margin:"10px", backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
       
    >
   
    <img src={img} alt="" style={{width:"190px" , height:"110px"}} />
    {label} <br/>
    {price}
  </Card>
 
      
    )
}

