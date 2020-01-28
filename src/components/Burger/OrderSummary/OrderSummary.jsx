import React from "react";
import Button from "../../Layout/Button";

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
    });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={props.dismissOrder}>Cancel</Button>
          <Button btnType="Success" clicked={props.confirmOrder}>Confirm</Button>
        </>
    )
};

export default orderSummary;
