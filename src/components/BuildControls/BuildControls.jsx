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
            {controls.map((ctrl) => {
                return <BuildControl
                    label={ctrl.label}
                    type={ctrl.type}
                    key={ctrl.label}
                    added={() => props.addIng(ctrl.type)}
                    removed={() => props.remIng(ctrl.type)}
                />
            })}
        </div>
    )
};

export default buildControls;
