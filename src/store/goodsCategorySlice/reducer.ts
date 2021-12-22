import {Action} from "redux"
import { GOODS_CATEGORY_ACTIONS, LOAD_STATUSES } from "./constants"
import {State} from "./types"

const INITIAL_STATE:State = {
loadStatus:LOAD_STATUSES.UNKNOWN,
data:[]
}

export const reducer = (state=INITIAL_STATE, action:Action<GOODS_CATEGORY_ACTIONS>)=>{
switch(action.type){
    case GOODS_CATEGORY_ACTIONS.GET_CATEGORIES:{
        return{
            ...state,
            loadStatus:LOAD_STATUSES.LOADING
        }
    }
    case GOODS_CATEGORY_ACTIONS.GET_CATEGORIES_SUCCESS:{
        const {payload} = action as {
            type:GOODS_CATEGORY_ACTIONS.GET_CATEGORIES_SUCCESS,
            payload:State["data"]
        }
        return{
            data:payload,
            loadStatus:LOAD_STATUSES.SUCCESS
        }
    }
    case GOODS_CATEGORY_ACTIONS.GET_CATEGORIES_FAILURE:{
        return{
            ...state,
            loadStatus:LOAD_STATUSES.FAILURE
        }
    }
    default:
        return state

}

}