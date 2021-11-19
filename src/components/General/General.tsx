import React from "react";
import {Menu1} from "../Menu"
import {Footer} from "../Footer"
import {Card1} from "../Card"


interface GeneralProps{

}

export const General:React.FC<GeneralProps> = ()=>{
 const   categories = [
        { id: 1, type: 'house', label: ' Дом, сад, зоотовары' },
        { id: 2, type: 'children', label: 'Детям и мамам' },
        { id: 3, type: 'cosmetics', label: 'Косметика, парфюмерия' },
        { id: 4, type: 'souvenirs', label: 'Сувениры, галантерея' },
        { id: 5, type: 'books', label: 'Книги' },
        { id: 6, type: 'products', label: 'Продукты, деликатесы' },
        { id: 7, type: 'garden', label: 'Дом, сад, зоотовары' },
        { id: 8, type: 'electronics', label: 'Техника, электроника' },
        { id: 9, type: 'studies', label: 'Канцтовары, учёба' },
        { id: 10, type: 'sport', label: 'Туризм, отдых, спорт' },
        { id: 11, type: 'health', label: 'Здоровье, медтехника' },
    
    ]


 const   goodsCategory = [ {  category:{ id: 1, type: 'house', label: 'Дом' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},
{  category:{ id: 2, type: 'house', label: 'Канцтовары, учёба' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},
{  category:{ id: 2, type: 'house', label: 'Косметика, парфюмерия' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},
{  category:{ id: 3, type: 'house', label: 'Книги' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},
{  category:{ id: 4, type: 'house', label: 'Продукты питания, напитки' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},
{  category:{ id: 5, type: 'house', label: 'Развлечения, творчество' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random' },
]},

] 




    return(
        <div>
            <div style={{display:'flex', padding:'18px' }}>
            <Menu1 categories={categories} /> 
      <img style={{width:'100%', height:'470px'}} src="https://cdn.ren.tv/cache/960x540/media/img/7d/4e/7d4e1c868f36e52de337b474dd6d9f1953072c8e.jpg" alt="" />
    </div>
     {goodsCategory.map((cat)=>(
       <section>
        
           <h3 style={{textAlign:"center", fontSize:"20px"}}>{cat.category.label} </h3>

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