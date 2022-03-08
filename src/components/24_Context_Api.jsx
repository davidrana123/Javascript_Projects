import React, { useContext } from "react";
import { GlobalInfo } from "../view/Basics_concept";
let ContextApi = () => {
  const { appColor } = useContext(GlobalInfo);
  console.log("appColor", appColor);
  return (
    <div>
      <h1 style={{ color: appColor }}>24_ContextApi</h1>
    </div>
  );
};

export default ContextApi;
