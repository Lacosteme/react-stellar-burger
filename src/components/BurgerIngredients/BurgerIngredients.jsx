import React from 'react';
import PropTypes from 'prop-types';
import ingredientPropType from "../../utils/prop-types"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import styles from "./BurgerIngredients.module.css"
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

export default function BurgerIngredients({ data, isLoading, hasError }) {

    const [popup, setPopup] = React.useState({
    visible: false,
    popupData: []
    });

    const [current, setCurrent] = React.useState('one')

    const handleClose = () => {
        setPopup({...popup, visible:false, popupData: []})
    }

    const showIngredient = (data) => {
        setPopup({...popup, visible: true, popupData: data})
        console.log(data)
      }

    const { visible, popupData } = popup

    return (
        <section className={styles.ingridients}>
            <p className="text text_type_main-large mb-5">
                Соберите бургер
            </p>
            <div className={styles.tab}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.menu}>
                <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
                <div className={styles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Error'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "bun" &&
                        <BurgerIngredient showIngredient={showIngredient} key={item._id} data={item}/>)}
                </div>
                <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
                <div className={styles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Error'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "sauce" && 
                        <BurgerIngredient showIngredient={showIngredient} key={item._id} data={item}/>)}
                </div>
                <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
                <div className={styles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Error'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "main" && 
                        <BurgerIngredient showIngredient={showIngredient} key={item._id} data={item}/>)}
                </div>
            </div>
            {visible &&  <Modal handleClose={handleClose}>
                            <IngredientDetails data={popupData}/>
                        </Modal>}
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired),
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
}