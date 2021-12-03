import React, { useContext } from "react";
import { AppUrls } from "../../../Constants/AppUrls";
import { RouterContext } from "../../Contexts/RouterContext/RouterContext";
import "./PlantCard.scss";

function PlantCard(props) {
  const { plant } = props;
  const { img, name, details, id } = plant;

  const { navigate } = useContext(RouterContext);
  const url = AppUrls.PLANT_DETAILS + "?id=" + id;
  return (
    <div className="plantCard" onClick={() => navigate(url)}>
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
