import { combineReducers } from "redux";
import products from "./products";
import shops from "./shops";
import orders from "./orders";
import comments from "./comments";
import information from "./information";

//合并领域状态
const rootReducer = combineReducers({
    products,
    shops,
    orders,
    comments,
    information
});

export default rootReducer;