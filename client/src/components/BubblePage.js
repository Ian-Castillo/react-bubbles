import React, { useState, useEffect } from "react";
import Auth from "./axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

const getColors = () => {
  Auth()
  .get('/colors')
  .then(res => {
    setColorList(res.data);
  });
  };

  useEffect(() => {
    getColors();
  }, []);
  // const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} getColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
