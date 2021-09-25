import React from "react";
import Style from '../App.css';
import data from '../AppData'

function CancelButton(props){
    function CancelButtonHandler(){
        const objIndex = data.findIndex((obj => obj.id === props.id));
        data[objIndex].state = false;
        console.log("clicked" + objIndex + data[objIndex].state);
    }
    return(
        <div className="btn-div" style={Style}>
            <button className="button" id="cancelBtn" onClick={CancelButtonHandler}>Not Interested</button>
        </div>
    );
}

export default CancelButton;