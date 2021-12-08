import {Action } from "redux"
import {LOAD_STATUSES } from "./constants";


interface State{
    // loadStatus:LOAD_STATUSES;
    goodsCategories: { category:{ id: number, type: string, label: string }, items:{ id: number, category_type: string, label: string, price:number, img: string, description:string }[] }[];
}

const INITIAL_STATE:State = {

   
   

    goodsCategories : [ {  category:{ id: 1, type: 'house', label: 'Дом' }, 
items: [{ id: 1, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 5, category_type: 'house', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},
{  category:{ id: 2, type: 'studies', label: 'Канцтовары, учёба' }, 
items: [{ id: 1, category_type: 'studies', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'studies', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'studies', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'studies', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 5, category_type: 'studies', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},
{  category:{ id: 3, type: 'cosmetics', label: 'Косметика, парфюмерия' }, 
items: [{ id: 1, category_type: 'cosmetics', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'cosmetics', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'cosmetics', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'cosmetics', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random',description:"Good description" },
{ id: 5, category_type: 'cosmetics', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},
{  category:{ id: 4, type: 'books', label: 'Книги' }, 
items: [{ id: 1, category_type: 'books', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'books', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'books', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'books', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random',description:"Good description" },
{ id: 5, category_type: 'books', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},
{  category:{ id: 5, type: 'products', label: 'Продукты питания, напитки' }, 
items: [{ id: 1, category_type: 'products', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'products', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'products', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'products', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random',description:"Good description" },
{ id: 5, category_type: 'products', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},
{  category:{ id: 6, type: 'entertainment', label: 'Развлечения, творчество' }, 
items: [{ id: 1, category_type: 'entertainment', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 2, category_type: 'entertainment', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 3, category_type: 'entertainment', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
{ id: 4, category_type: 'entertainment', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random',description:"Good description" },
{ id: 5, category_type: 'entertainment', label: 'Коврик', price: 99, img: 'https://source.unsplash.com/random', description:"Good description" },
]},

] 

}


export const reducer = (state= INITIAL_STATE, action: Action ) =>{
    switch (action.type){
        default:
            return state;
    }
}