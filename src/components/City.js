import React from "react";

function City(props){
    return(
        <div className="card">
            <div className="upper-part">
                <img src={props.url} alt=""></img>
            </div>     
            <div className="lower-part">
                <div className="content-inside">
                    <div className="row">
                        <h2 className="punch-lime">{props.headig}</h2>
                        <h2 className="price">{props.price}</h2>
                    </div>
                    <div className="description">
                        <p className="content">{props.desc}</p>
                        <p className="read">Read More</p>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default City;