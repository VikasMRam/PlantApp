import React, { useState, useContext } from "react";
import pot4 from "./../../Assets/Images/pot4.jpg";
import "./Plant-Details.scss";
import Button from "../../Ui/Button/Button";
import { ButtonTypes, ButtonSizes } from "./../../Constants/AppConstants";
import CaptureImage from "../../Common/Components/CaptureImage/CaptureImage";
import { RouterContext } from "../../Common/Contexts/RouterContext/RouterContext";
import { plants } from "./../../Constants/AppConstants";

function PlantDetails() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [predictionText, setPredictionText] = useState(false);
  const { navigate, getQueryParam } = useContext(RouterContext);
  const id = getQueryParam("id");
  let plant = null;
  plants.forEach((plant1) => {
    if (plant1.id == id) {
      plant = plant1;
    }
  });
  console.log(id)
  console.log(plant);

  const onImageCaptureHandler = (data) => {
    console.log(data);
  };

  const onModalOk = () => {};
  const onCancelHandler = () => {
    setIsModalOpened(false);
  };
  const onPredictionComplete = (text) => {
    setIsModalOpened(false);
    setPredictionText(text);
  };
  return (
    <>
      {plant && (
        <div className="pageContainer">
          {/* <div className="pageHeader">Plant Details</div> */}
          <div className="plantDetailsContainer">
            <div className="plantDetailsMainContainer">
              <div className="plantDetailsMainImage">
                <img src={plant.img} />
              </div>
              <div className="plantDetailsMainDescription">
                <div className="plantDetailsMainDescriptionName">
                  {plant.name}.
                </div>
                <div className="plantDetailsMainDescriptionText">
                  {plant.details}
                </div>
                <div className="plantDetailsUploadImageBtn">
                  <Button
                    name="Upload Image"
                    type={ButtonTypes.primary}
                    size={ButtonSizes.large}
                    isBlock={true}
                    onClickHandler={() => {
                      setIsModalOpened(true);
                      setPredictionText(null);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {predictionText && (
            <div className="predictionResultContainer">
              <div className="predictionHeader">Prediction Result</div>
              <div className="predictionResult">{predictionText}</div>
            </div>
          )}

          {isModalOpened && (
            <CaptureImage
              onCancelHandler={onCancelHandler}
              onPredictionComplete={onPredictionComplete}
            />
          )}
        </div>
      )}
    </>
  );
}

export default PlantDetails;
