import React from "react";
import Classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return (
        <div className={Classes.BuildControls}>
            <div style={{width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "200%"}}>{Math.round(props.totalPrice * 10) / 10}€</div>
            {controls.map((ctrl) => {
                return <BuildControl
                    disableRemove={props.disableRemove[ctrl.type]}
                    label={ctrl.label}
                    type={ctrl.type}
                    key={ctrl.label}
                    added={() => props.addIng(ctrl.type)}
                    removed={() => props.remIng(ctrl.type)}
                />
            })}
            <button className={Classes.OrderButton} disabled={!props.puchaseable}>Order Burger</button>
        </div>
    )
};

export default buildControls;
