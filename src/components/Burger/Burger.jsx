import React from "react";
import Classes from "./Burger.module.css"
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, index) => {
                return <BurgerIngredient type={ingredientKey} key={ingredientKey + index} />
                })
        })
                .reduce((arr, ele) => {
                    return arr.concat(ele)
                }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start building your burger</p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger;
