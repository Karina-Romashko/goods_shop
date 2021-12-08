import {Action } from "redux"
import {LOAD_STATUSES, CATEGORIES_ACTIONS } from "./constants";
import {State} from "./types"



const INITIAL_STATE:State = {

    loadStatus:LOAD_STATUSES.UNKNOWN,
    data:[]
    // categories : [
    //     { id: 1, type: 'house', label: ' Дом, сад, зоотовары' },
    //     { id: 2, type: 'children', label: 'Детям и мамам' },
    //     { id: 3, type: 'cosmetics', label: 'Косметика, парфюмерия' },
    //     { id: 4, type: 'souvenirs', label: 'Сувениры, галантерея' },
    //     { id: 5, type: 'books', label: 'Книги' },
    //     { id: 6, type: 'products', label: 'Продукты, деликатесы' },
    //     { id: 7, type: 'entertainment', label: 'Развлечения, творчество' },
    //     { id: 8, type: 'electronics', label: 'Техника, электроника' },
    //     { id: 9, type: 'studies', label: 'Канцтовары, учёба' },
    //     { id: 10, type: 'sport', label: 'Туризм, отдых, спорт' },
    //     { id: 11, type: 'health', label: 'Здоровье, медтехника' },
       
    
    // ],
   

   

}


export const reducer = (state= INITIAL_STATE, action: Action<CATEGORIES_ACTIONS> ) =>{
    switch (action.type){
        case CATEGORIES_ACTIONS.GET_CATEGORIES:{
            return{
                ...state,
                loadStatus:LOAD_STATUSES.LOADING
            }
               
        }
        case CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS:{
            const {payload} = action as {
                type:CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
                payload:State['data']
            }
            return{
                data:payload,
                loadStatus:LOAD_STATUSES.SUCCESS
            }
        }
        case CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE:{
            return{
                ...state,
                loadStatus:LOAD_STATUSES.FAILURE
            }
        }

        default:
            return state;
    }
}