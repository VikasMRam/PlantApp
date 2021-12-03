import React from "react";
import "./All_Plants.scss";
import PlantCard from "../../Common/Components/Plantcard/PlantCard";
import {plants} from "./../../Constants/AppConstants"



function All_Plants() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">Available Plants</div>
      <div className="allPlantsOuterContainer">
        {plants.map((plant) => (
          <div className="allPlantsPlantCard" key={plant.id} >
            <PlantCard plant={plant} />
          </div>
        ))}
        <div className="allPlantsPlantCard"></div>
      </div>
    </div>
  );
}

export default All_Plants;
