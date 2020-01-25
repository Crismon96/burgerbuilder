import React from "react";
import "./Modal.Module.css";

const modal = (props) => {
    return (
        <div
            className="Modal"
            style={{
                transform: props.shouldOpen ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.shouldOpen ? "1" : "0"
            }}
        >
            {props.children}
        </div>
    )
};

export default modal;
