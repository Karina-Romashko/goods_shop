import { LOAD_STATUSES } from "./constants";

export interface GoodsCategory{
    category:{ id:number
    type:string;
    label:string },
    items:{ id: number;
     label: string;
     category_type: string;
     price:number; 
     img: string; 
     description:string}[]
 }


export interface State{
    loadStatus:LOAD_STATUSES;
    data: GoodsCategory[]
}