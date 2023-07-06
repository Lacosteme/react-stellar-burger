import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS
        })
        fetch(`${config.baseUrl}/ingredients`)
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data
                    })
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED
                    })
                }
            }).catch(err => {
                alert(err)
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            })
    }
}