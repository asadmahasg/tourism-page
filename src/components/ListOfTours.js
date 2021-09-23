import React from "react";
import City from './City'
import data from '../AppData'

function ListOfTours(){
    const componentVal = data.filter(element=>element.state===true)
            .map(filtered=> 
                <City id={filtered.id} url={filtered.url} heading={filtered.punch_line} price={filtered.price} desc={filtered.description}/>
        )
    return(
        <div>
            {componentVal};
           
        </div>
    )
}

export default ListOfTours;