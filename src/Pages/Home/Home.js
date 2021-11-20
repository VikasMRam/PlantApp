import React, {useContext} from "react";
import "./Home.scss";
import Button from "../../Ui/Button/Button";
import { ButtonTypes, ButtonSizes } from "./../../Constants/AppConstants";
import { AppUrls } from "../../Constants/AppUrls";
import { RouterContext } from "../../Common/Contexts/RouterContext/RouterContext";

function Home() {
  const {navigate} = useContext(RouterContext)
  return (
    <div className="pageContainer homePage">
      <div className="homepageContent">
        <div className="homePageContentInner">
          <div className="homePageContentHeader">Plant App</div>
          <div className="homePageContentSubHeader">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className="homePageContentButton">
            <Button
              name="Show Plants"
              type={ButtonTypes.primary}
              size={ButtonSizes.large}
              onClickHandler={() => navigate(AppUrls.ALL_PLANTS)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
