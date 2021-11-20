import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Modal, Button } from "antd";
import "./CaptureImage.scss";

const videoConstraints = {
  facingMode: "environment",
  height: 200,
};

const initialButtonProps = {
  okButtonText: "Capture Image",
  cancelButtonText: "Cancel",
};

function CaptureImage(props) {
  const { onCaptureHandler, onCancelHandler } = props;
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [modalButtonProps, setmodalButtonProps] = useState(initialButtonProps);

  const constructFooter = () => {
    if (!imageSrc) {
      return [
        <Button key="back" onClick={onCancelHandler}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={capture}>
          Capture Image
        </Button>,
      ];
    } else {
      return [
        <Button key="back" onClick={onCancelHandler}>
          Cancel
        </Button>,
        <Button key="submit" type="default" onClick={() => setImageSrc(null)}>
          Retake
        </Button>,
        <Button key="submit" type="primary" onClick={capture}>
          Predict Image
        </Button>,
      ];
    }
  };

  const capture = React.useCallback(() => {
    setImageSrc(webcamRef.current.getScreenshot());
    setmodalButtonProps({
      okButtonText: "Predict Image",
      cancelButtonText: "Retake",
    });
  }, [webcamRef]);

  const internalCancelHandler = (ev) => {
    if (onCancelHandler) {
      onCancelHandler();
    }
  };

  const internalOkHandler = () => {
    if (modalButtonProps.okButtonText === "Capture Image") {
      capture();
    } else if (modalButtonProps.okButtonText === "Predict Image") {
      if (onCaptureHandler) {
        onCaptureHandler(imageSrc);
      }
    }
  };

  return (
    <div className="captureImageSection">
      <Modal
        visible={true}
        title="Capture Image"
        okText={modalButtonProps.okButtonText}
        cancelText={modalButtonProps.cancelButtonText}
        onOk={internalOkHandler}
        onCancel={internalCancelHandler}
        footer={constructFooter()}
      >
        {!imageSrc && (
          <Webcam
            audio={false}
            height="100%"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={videoConstraints}
            id={"webcamFeed"}
            closable={false}
          />
        )}

        {imageSrc && (
          <div className="previewImageContainer">
            <div className="message"> Is Image looks good?</div>
            <div className="previewImage">
              <img src={imageSrc} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CaptureImage;
