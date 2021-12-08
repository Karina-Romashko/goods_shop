import {Action } from "redux"


interface State{
    items:{ id: number, category_type: string, label: string, price:number, img: string, description:string }[]
}

const INITIAL_STATE:State={
    items:[]

}

export const reducer = (state= INITIAL_STATE, action: Action ) =>{
    switch (action.type){
        default:
            return state;
    }
}