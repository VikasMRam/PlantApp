import React from "react";
import "./All_Plants.scss";
import pot1 from "./../../Assets/Images/pot1.jpg";
import pot2 from "./../../Assets/Images/pot2.jpg";
import pot3 from "./../../Assets/Images/pot3.jpg";
import pot4 from "./../../Assets/Images/pot4.jpg";
import pot5 from "./../../Assets/Images/pot5.jpg";
import PlantCard from "../../Common/Components/Plantcard/PlantCard";

const plants = [
  {
    img: pot1,
    name: "Plant 1",
    details: `
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
    porttitor lectus nibh`,
  },
  {
    img: pot2,
    name: "Plant 2",
    details: `
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
    porttitor lectus nibh`,
  },
  {
    img: pot3,
    name: "Plant 3",
    details: `
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
    porttitor lectus nibh`,
  },
  {
    img: pot4,
    name: "Plant 4",
    details: `
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
    porttitor lectus nibh`,
  },
  {
    img: pot5,
    name: "Plant 5",
    details: `
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed
    porttitor lectus nibh`,
  },
];

function All_Plants() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">Available Plants</div>
      <div className="allPlantsOuterContainer">
        {plants.map((plant) => (
          <div className="allPlantsPlantCard">
            <PlantCard plant={plant} />
          </div>
        ))}
        <div className="allPlantsPlantCard"></div>
      </div>
    </div>
  );
}

export default All_Plants;
