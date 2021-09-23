import React from "react";
import ListOfTours from './ListOfTours';

function Header(){
    return(
        <div className="header-div">
            <h1 className="heading-content">Our Tours</h1>
            <ListOfTours />
        </div>
    );
}

export default Header;