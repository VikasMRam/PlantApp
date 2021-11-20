import React, { useState } from "react";
import pot4 from "./../../Assets/Images/pot4.jpg";
import "./Plant-Details.scss";
import Button from "../../Ui/Button/Button";
import { ButtonTypes, ButtonSizes } from "./../../Constants/AppConstants";
import CaptureImage from "../../Common/Components/CaptureImage/CaptureImage";

function PlantDetails() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onImageCaptureHandler = (data) => {
    console.log(data);
  };

  const onModalOk = () => {};
  const onCancelHandler = () => {
    setIsModalOpened(false);
  };
  return (
    <div className="pageContainer">
      {/* <div className="pageHeader">Plant Details</div> */}
      <div className="plantDetailsContainer">
        <div className="plantDetailsMainContainer">
          <div className="plantDetailsMainImage">
            <img src={pot4} />
          </div>
          <div className="plantDetailsMainDescription">
            <div className="plantDetailsMainDescriptionName"> Nulla quis.</div>
            <div className="plantDetailsMainDescriptionText">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Donec rutrum congue leo eget
              malesuada. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Donec rutrum congue leo eget malesuada.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui
              posuere blandit. Proin eget tortor risus
            </div>
            <div className="plantDetailsUploadImageBtn">
              <Button
                name="Upload Image"
                type={ButtonTypes.primary}
                size={ButtonSizes.large}
                isBlock={true}
                onClickHandler={() => setIsModalOpened(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpened && <CaptureImage onCancelHandler={onCancelHandler} />}
    </div>
  );
}

export default PlantDetails;
