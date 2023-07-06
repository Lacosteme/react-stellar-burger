import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { compose, createStore } from 'redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
    function App() {

      return (
        <>
          <AppHeader />
          <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
        </DndProvider>
      </main>
    </>
  );
}
export default App;