import React from "react";
import Cdata from './Cdata';
import '../BlogFolder/BlogHome.css'

const Card = () =>{
    return(
        <div className="cardSection grid">
            {Cdata.map((value)=>{
            return(
                <div className="cardbox">
                    <div className="img">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="cardtext">
                        <span>{value.category}</span>
                        <p>{value.title}</p>
                    </div>
                </div>
            )
      })}
        </div>

        
    )
}

export default Card;