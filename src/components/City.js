import React from "react";
import Style from '../App.css';
import CancelButton from './CancelButton';

function City(props){
    let check=true;
    function ButtonHandler(){
        if(check===true){
            document.getElementById("clickin").style.height="auto";
            document.getElementById("more").innerText="Show Less";
            check=false;
        }
        else{
            document.getElementById("clickin").style.height="60px";
            document.getElementById("more").innerText="Read More";
            check=true;
        }
        
    }
    
    return(
        <div className="card" style={Style}>
            <div className="upper-part">
                <img src={props.url} alt="" id="image"></img>
            </div>     
            <div className="lower-part">
                <div className="content-inside">
                    <div className="row">
                        <h2 className="punch-line">{props.heading}</h2>
                        <h2 className="price">{props.price}</h2>
                    </div>
                    <div className="description">
                        <p className="content" id="clickin">{props.desc} </p>
                        <div className="read">
                            <p className="read-more" onClick={ButtonHandler.bind(this)} id="more" >Read More</p>
                        </div>
                    </div>
                </div>
            </div>    

            <CancelButton />
        </div>
    )
}

export default City;