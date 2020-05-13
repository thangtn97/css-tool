import React from "react";
import Slider from "../UI/Slider/Slider";

const boxShadow = (props) => {
  return (
    <div>
      <Slider
        label="Right"
        defaultValue="0"
        min="-50"
        max="50"
        propsName="horiOffset"
        handleChange={props.handleChange}
      />
      <Slider
        label="Left"
        defaultValue="0"
        min="-50"
        max="50"
        propsName="vertiOffset"
        handleChange={props.handleChange}
      />
      <Slider
        label="Spread"
        defaultValue="3"
        min="0"
        max="100"
        propsName="spread"
        handleChange={props.handleChange}
      />
      <Slider
        label="Blur"
        defaultValue="5"
        min="0"
        max="100"
        propsName="blur"
        handleChange={props.handleChange}
      />
      <Slider
        label="Opacity"
        defaultValue="5"
        min="0"
        max="100"
        propsName="opacity"
        handleChange={props.handleChange}
      />
    </div>
  );
};
export default boxShadow;
