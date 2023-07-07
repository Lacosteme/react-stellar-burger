import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredient.module.css";
import ingredientPropType from "../../utils/prop-types";
import { useDrag } from "react-dnd";
import { showIngredient } from "../../services/actions/ingredientDetails";

export default function BurgerIngredient({ data }) {
  const { draggedElements } = useSelector((state) => state.elements);
  const dispatch = useDispatch();

  const ingredientCounter = React.useMemo(() => {
    let counter = 0;
    draggedElements.forEach((element) => {
      if (element._id === data._id) {
        counter = counter + 1;
      }
    });
    return counter;
  }, [draggedElements]);

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: data,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const showPopup = (data) => {
    dispatch(showIngredient(data));
  };
  return (
    !isDrag && (
      <div
        ref={dragRef}
        onClick={() => showPopup(data)}
        className={styles.item}
      >
        {ingredientCounter > 0 && (
          <div className={styles.counter}>
            <Counter
              count={ingredientCounter}
              size="default"
              extraClass="m-1"
            />
          </div>
        )}
        <img src={data.image} alt={data.name} />
        <div className={styles.price}>
          <p className="text text_type_digits-default mt-1 mb-1 mr-2">
            {data.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.text}>
          <p className="text text_type_main-default">{data.name}</p>
        </div>
      </div>
    )
  );
}

BurgerIngredient.propTypes = {
  data: ingredientPropType.isRequired,
};
