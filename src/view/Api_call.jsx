import React from "react";
import Api from "../Api/Api";
import Post from "../Api/Post_data";

let CallApi = () => {
  return (
    <div>
      <h1>CallApi</h1>
      <Api />
      <Post />
    </div>
  );
};

export default CallApi;
