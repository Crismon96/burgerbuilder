import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const TOTAL_PRICES = {
    bacon: 0.6,
    cheese: 0.7,
    meat: 1.4,
    salad: 0.4
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1.5
    };

    render() {
        return(
        <div>
            <Burger ingredients={this.state.ingredients}/>
            <div style={{width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "200%"}}>{Math.round(this.state.totalPrice * 10) / 10}€</div>
            <BuildControls addIng={this.addIngredient} remIng={this.removeIngredient}/>
        </div>)
    }

    addIngredient = (ing) => {
        const currentIngState = {
            ...this.state.ingredients,
            [ing]: this.state.ingredients[ing] + 1
        };
        const currentPrice = this.state.totalPrice + TOTAL_PRICES[ing];
        this.setState({
            ingredients: {
                ...currentIngState
            },
            totalPrice: currentPrice
        });
    };

    removeIngredient = (ing) => {
        if (this.state.ingredients[ing] > 0) {
            const currentIngState = {
                ...this.state.ingredients,
                [ing]: this.state.ingredients[ing] - 1
            };
            const currentPrice = this.state.totalPrice - TOTAL_PRICES[ing];
            this.setState({
                ingredients: {
                    ...currentIngState
                },
                totalPrice: currentPrice
            });

        }
    }
}

export default BurgerBuilder;
