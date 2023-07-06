import { combineReducers } from "redux";
import { ingredientsReducer } from "./burgerIngredients";
import { constructorReducer } from "./burgerConstructor";
import { ingredientDetailsReduser } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";


export default combineReducers({
    ingredients: ingredientsReducer,
    elements: constructorReducer,
    ingredientDetails: ingredientDetailsReduser,
    orderDetails: orderDetailsReducer
})