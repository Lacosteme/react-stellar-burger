export const SHOW_INGREDIENT = "SHOW_INGREDIENT";
export const HIDE_INGREDIENT = "HIDE_INGREDIENT";

export const showIngredient = (data) => {
  return {
    type: SHOW_INGREDIENT,
    payload: {
      data,
    },
  };
};

export const hideIngredient = () => {
  return {
    type: HIDE_INGREDIENT,
  };
};
