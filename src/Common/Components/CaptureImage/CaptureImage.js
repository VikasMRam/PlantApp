import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Modal, Button } from "antd";
import "./CaptureImage.scss";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

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
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await loadGraphModel(
        "https://raw.githubusercontent.com/VikasMRam/PlantApp/main/model.json"
      );
      setModel(model);
    };
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const predictImage = () => {
    console.log("img");
    // console.log(imageSrc)
    try {
      const img = document.getElementById("previewImage");
      const tfImg = tf.browser.fromPixels(img);
      const smalImg = tf.image.resizeBilinear(tfImg, [224, 224]);
      const resized = tf.cast(smalImg, "float32");
      const t4d = tf.tensor4d(Array.from(resized.dataSync()), [1, 224, 224, 3]);
      console.log(
        model.predict(t4d)
      );
    } catch (err) {
      console.log(err);
    }
  };
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
        <Button type="default" onClick={() => setImageSrc(null)}>
          Retake
        </Button>,
        <Button type="primary" onClick={predictImage}>
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
      // if (onCaptureHandler) {
      //   onCaptureHandler(imageSrc);
      // }
      predictImage();
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
              <img src={imageSrc} id="previewImage" />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CaptureImage;
