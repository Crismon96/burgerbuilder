import React from "react";
import Classes from "./Backdrop.module.css";

const backdrop = (props) => {

    return (
        <div onClick={props.modalClosed} className={Classes.Backdrop}></div>
    )
};

export default backdrop;
