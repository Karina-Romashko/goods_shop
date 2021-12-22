import React from "react";

interface Good {
    id: string;
    label: string;
    category_type: string;
    price:number, 
    img: string, 
    description:string;
}
interface Category{
    id:string
    type:string;
    label:string;
}
interface CartItem{
    id: string;
    label: string;
    category_type: string;
    price:number, 
    img: string, 
    description:string;
}
interface GoodsCategory{
   category:{ id:number
   type:string;
   label:string; },
   items:{ id: number;
    label: string;
    category_type: string;
    price:number, 
    img: string, 
    description:string;}[]
}

export class Api {
    getGoods(): Promise<{ items: Good[]; total: number }> {
        return fetch('/api/goods').then(r => {
            if (r.ok) {
                return r.json()
            }
           
            throw new Error("не ок");
        });
    }
    getGoodsCategory(): Promise<{ goodsCategory: GoodsCategory[]; total: number }> {
        return fetch('/api/popular_categories').then(r => {
            if (r.ok) {
                return r.json()
                
            }
            
            throw new Error("не ок");
        });
    }

    getCategories(): Promise<{ categories: Category[]; total: number }> {
        return fetch('/api/categories').then(r => {
            if (r.ok) {
                return r.json()
            }
         
            throw new Error("не ок");
        });
    }
    getCart(): Promise<{ items:CartItem[] ; total: number }> {
        return fetch('/api/cart').then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error("не ок");
        });
    }
}