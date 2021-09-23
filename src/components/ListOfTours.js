import React from "react";
import City from './City'
import data from '../AppData'

function ListOfTours(){
    const componentVal = data.map(element=> <City id={element.id} url={element.url} heading={element.punch_line} price={element.price} desc={element.description}/>)
    return(
        <div>
            {componentVal};
        </div>
    )
}

export default ListOfTours;