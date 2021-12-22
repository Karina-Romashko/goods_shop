import { Api } from "../../api";
import { Dispatch } from "react";
import { GoodsCategory } from "./types";
import { GOODS_CATEGORY_ACTIONS } from "./constants";
import { CATEGORIES_ACTIONS } from "../categoriesSlice/constants";

export const getGoodsCategory = ()=>({type:GOODS_CATEGORY_ACTIONS.GET_CATEGORIES})
export const getGoodsCategorySuccess  = (goodsCategory:GoodsCategory[])=>({
    type:CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload:goodsCategory
})
export const getGoodsCategoryFailure =()=>({
    type:CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})
export const fetchGoodsCategory =()=> async (dispatch:Dispatch<unknown>)=>{
    dispatch(getGoodsCategory())
    const api = new Api()
    api.getGoodsCategory()
    .then(({goodsCategory})=>{
        dispatch(getGoodsCategorySuccess(goodsCategory))
    })
    .catch(()=>{
        dispatch(getGoodsCategoryFailure())
    })


}