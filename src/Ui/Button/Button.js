import React from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ButtonIcons, ButtonTypes } from "../../Constants/AppConstants";
import "./Button.scss";

function ButtonComponent(props) {
  const { name, type, isBlock, size, icon, loading, onClickHandler } = props;

  const getIconType = () => {
    if (icon === ButtonIcons.search) {
      return <SearchOutlined />;
    }
    return null;
  };

  var buttonClassName = "";
  if (type === ButtonTypes.primary) {
    buttonClassName = "primaryButton";
  } else if (type === ButtonTypes.default) {
    buttonClassName = "defaultButton";
  }
  
  const defaultClickHandler = () => {
    if (onClickHandler) {
      onClickHandler();
    }
  };

  return (
    <div>
      <Button
        type={type}
        size={size}
        block={isBlock}
        icon={getIconType()}
        className={buttonClassName}
        loading={loading}
        onClick={defaultClickHandler}
      >
        {name}
      </Button>
    </div>
  );
}

export default ButtonComponent;
