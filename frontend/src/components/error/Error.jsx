import React from "react";
import "./error.css"

const Error = ({message}) => (
    <p className="has-text-weight-bold has-text-danger">{message}</p>
);

export default Error;