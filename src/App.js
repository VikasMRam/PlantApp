import "./App.scss";
import "antd/dist/antd.css";
import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppUrls } from "./Constants/AppUrls";
import Home from "./Pages/Home/Home";
import All_Plants from "./Pages/All_Plants/All_Plants";
import RouterContextProvider from "./Common/Contexts/RouterContext/RouterContext";
import Header from "./Common/Components/Header/Header";
import PlantDetails from "./Pages/Plant-Details/Plant-Details";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <RouterContextProvider>
        <Header />
        <div className="pagesConatiner">
          {
            <Switch>
              <Route path={AppUrls.Home}>
                <Home />
              </Route>
              <Route path={AppUrls.ALL_PLANTS}>
                <All_Plants />
              </Route>
              <Route path={AppUrls.PLANT_DETAILS}>
                <PlantDetails />
              </Route>
              <Route path={AppUrls.ABOUT_US}>
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          }
        </div>
      </RouterContextProvider>
    </>
  );
}

export default App;
