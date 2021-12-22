import { CATEGORIES_ACTIONS } from "./constants";
import { Category } from "./types";
import { Api } from "../../api";
import { Dispatch } from "react";



export const getCategories = ()=>({type:CATEGORIES_ACTIONS.GET_CATEGORIES})
export const getCategoriesSuccess = (categories:Category[])=>({
    type:CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload:categories
})
export const getCategoriesFailure = ()=>({
    type:CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})
export const fetchCategories = ()=> async (dispatch:Dispatch<unknown>)=> {
    dispatch(getCategories())
   
    const api = new Api()
    api.getCategories()
    .then(({categories})=>{
        dispatch(getCategoriesSuccess(categories))
    })
    .catch(()=>{
        dispatch(getCategoriesFailure())
    })
    }
     
    

