import { RootStore } from "../store";

export const getGoodsCategoryLoadStatus = (state:RootStore) =>state.goodsCategory.loadStatus
export const getGoodsCategory = (state:RootStore) => state.goodsCategory.data