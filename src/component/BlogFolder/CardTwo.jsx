import React from "react";
import Sdata from './Sdata'


const CardTwo = ()=>{
    return(
        <>
            <div className="cardSection slide">
                {Sdata.map((value)=>{
                    return(
                    <div className="cardtwo-box">
                        <div className="img">
                            <img src={value.cover} alt="" />
                        </div>
                        <div className="cardtwo-text">
                            <span>{value.category}</span>
                            <h3>{value.title}</h3>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardTwo;