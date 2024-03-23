import React from "react";
import AppLogo from "../assets/AppLogo.png";

const AppLogoIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => {
  return <img src={AppLogo} alt="App Logo" {...props} />;
};

export default AppLogoIcon;
