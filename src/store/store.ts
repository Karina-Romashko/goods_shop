import {createStore, combineReducers, applyMiddleware } from "redux"
import { reducer as categoriesReducer } from "./categoriesSlice/reducer"
import {reducer as goodsCategoryReducer} from "./goodsCategorySlice/reducer"
import { reducer as goodsReducer } from "./goodsSlice/reducer"
import { reducer as cartReducer } from "./cartSlice/reducer"

import thunk from "redux-thunk";


const rootReducer = combineReducers({
   categories:categoriesReducer,
   goodsCategory:goodsCategoryReducer,
   goods: goodsReducer,
   cart:cartReducer,

  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType < typeof store.getState>;