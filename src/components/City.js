import React from "react";
import Style from '../App.css';
import CancelButton from './CancelButton';

function City(props){
    let check=true;

    function ButtonHandler(){
        const val = document.getElementsByClassName("content");
        const val1 = document.getElementsByClassName("read-more");
        const a = val[props.id-1];
        const b = val1[props.id-1];

        if(check===true){
            a.style.height = "auto";
            b.innerText="Show Less";
            check=false;
        }
        else{
            a.style.height = "60px";
            b.innerText="... Read More";
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
                        <h2 className="punch-line" >{props.heading}</h2>
                        <h2 className="price">{props.price}</h2>
                    </div>
                    <div className="description">
                        <p className="content" id={props.id}>{props.desc} </p>
                        <div className="read">
                            <p className="read-more" onClick={ButtonHandler} id="more" >... Read More</p>
                        </div>
                    </div>
                </div>
            </div>    

            <CancelButton id={props.id}/>
        </div>
    )
}

export default City;