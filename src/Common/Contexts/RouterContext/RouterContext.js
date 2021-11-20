import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppUrls } from "../../../Constants/AppUrls";
import { scrollToTop } from "./../../Utils/window";

export const RouterContext = React.createContext({
  navigate: () => {},
  constructQueryStr: () => {},
  getQueryParam: () => {},
  setRedirectionData: () => {},
  getRedirectionData: () => {},
  resetRedirectionData : ()=>{}
}); 

const initialRedirectionData = {
  data: {},
};

const RouterContextProvider = (props) => {
  const history = useHistory();
  const { location } = useHistory();
  const [redirectionData, setRedirectionDataInternal] = useState(initialRedirectionData);
  const navigate = (path, params) => {
    let updatedPath = path + (params ? constructQueryStr(params) : "");
    history.push(updatedPath);
    scrollToTop();
  };

  const getRedirectionData = () => {
    return redirectionData;
  };

  const setRedirectionData = (data) => {
    setRedirectionDataInternal(data);
  };

  const resetRedirectionData = () => {
    setRedirectionData(initialRedirectionData);
  };

  const constructQueryStr = (params) => {
    if (!params) {
      return "";
    }
    let str = "";
    let keys = Object.keys(params);
    if (!keys.length) {
      return "";
    }
    if (keys.length) {
      str = "?";
      keys.forEach((key, index) => {
        str = str + key + "=" + params[key];
        if (index < keys.length - 1) {
          str = str + "&";
        }
      });
    }
    return str;
  };

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const contextValue = {
    navigate,
    constructQueryStr,
    getQueryParam,
    getRedirectionData,
    setRedirectionData,
    resetRedirectionData
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {props.children}
    </RouterContext.Provider>
  );
};

export default RouterContextProvider;
