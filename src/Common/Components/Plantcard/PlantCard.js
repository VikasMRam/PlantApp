import React, { useContext } from "react";
import { AppUrls } from "../../../Constants/AppUrls";
import { RouterContext } from "../../Contexts/RouterContext/RouterContext";
import "./PlantCard.scss";

function PlantCard(props) {
  const { plant } = props;
  const { img, name, details } = plant;

  const { navigate } = useContext(RouterContext);

  return (
    <div className="plantCard" onClick={()=>navigate(AppUrls.PLANT_DETAILS)}>
      <div className="plantCardImg">
        <img src={img} />
      </div>
      <div className="plantCardNameContainer">
        <div className="plantCardName">{name}</div>
        <div className="plantCardSubHeader">{details}</div>
      </div>
    </div>
  );
}

export default PlantCard;
