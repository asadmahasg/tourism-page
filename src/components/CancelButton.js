import React from "react";
import Style from '../App.css';
// import data from '../AppData'

function CancelButton(){
    function CancelButtonHandler(){
        console.log("Okay");
    }
    return(
        <div className="btn-div" style={Style}>
            <button className="button" onClick={CancelButtonHandler}>Not Interested</button>
        </div>
    );
}

export default CancelButton;