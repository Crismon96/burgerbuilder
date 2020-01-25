import React from "react";
import Classes from "./Modal.module.css";
import Backdrop from "../Modal/Backdrop";

const modal = (props) => {

    const showBackdrop = props.shouldOpen && <Backdrop modalClosed={props.cancelOrder} />;

    return (
        <>
            {showBackdrop}
            <div
                className={Classes.Modal}
                style={{
                    transform: props.shouldOpen ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.shouldOpen ? "1" : "0"}}>
                {props.children}
            </div>
        </>

    )
};

export default modal;
