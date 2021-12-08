import { RootStore } from "../store";


export const getCategoriesLoadStatus = (state:RootStore) => state.categories.loadStatus
export const getCategories = (state:RootStore) => state.categories.data
