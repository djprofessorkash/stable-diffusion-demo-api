import React from "react";

const Header = ({title}) => {
    return (
        <div className="gradient__text has-text-centered m-6 box">
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default Header;