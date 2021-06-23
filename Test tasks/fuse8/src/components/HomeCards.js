import React  from "react";
import './HomeCards.scss'

function HomeCards({cards}) {

    return (
      cards.map((info) => (
      <div className="wrapper">

        <div className="property" key={info.id}>
            <a className="property-link" href={`/details/${info.id}`}>
          <div className="property-img">
            <div className={`${info.type==='IndependentLiving'?'property-img__type--green':'property-img__type--orange'}`}> {info.type}</div>
          </div>
          <div className="property-title">{info.title}</div>
          <div className="property-address">{info.address}</div>
          <div className="property-price"> New Properties for sale from <b>£{info.price}</b></div>
            </a>
        </div>
      </div>
    )));

}

export default HomeCards