import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";

function App() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  const getIngredients = () => {
    setState({ ...state, isLoading: true, hasError: false });
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
      })
      .then((res) => setState({ ...state, data: res.data, isLoading: false }))
      .catch((e) => setState({ ...state, isLoading: false, hasError: true }));
  };

  React.useEffect(() => {
    getIngredients();
  }, []);

  const { data, isLoading, hasError } = state;

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          data={data}
          isLoading={isLoading}
          hasError={hasError}
        />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
