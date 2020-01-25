import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 1.5,
        isPurchaseable: false,
        isPurchasing: false
    };

    render() {
        const disableDecrease = {
            ...this.state.ingredients
        };
        for (let key in disableDecrease) {
            disableDecrease[key] = disableDecrease[key] <= 0;
        }

        return(
        <div>
            <Burger ingredients={this.state.ingredients}/>
            <Modal shouldOpen={this.state.isPurchasing}>
                <OrderSummary ingredients={this.state.ingredients} />
            </Modal>
            <BuildControls purchase={this.onPurchase} puchaseable={this.state.isPurchaseable} totalPrice={this.state.totalPrice} disableRemove={disableDecrease} addIng={this.addIngredient} remIng={this.removeIngredient}/>
        </div>)
    }

    updatePurchasable(ingredients) {
        const sumIngredients = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
        }, 0);
        this.setState({isPurchaseable: sumIngredients})
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
        this.updatePurchasable(currentIngState);
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
            this.updatePurchasable(currentIngState);
        }
    }

    onPurchase = () => {
        this.setState({isPurchasing: true})
    }
}

export default BurgerBuilder;
