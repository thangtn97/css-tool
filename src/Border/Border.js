import React from "react";
import Slider from "../UI/Slider/Slider";
import styles from "./Border.module.css";

class Border extends React.Component {
  state = {
    borderStyle: "solid",
    borderRadius: 1,
  };
  handleClickedStyle = (value) => {
    this.props.handleClickedStyle(value);
    this.setState({ borderStyle: value });
  };
  render() {
    return (
      <div>
        <input
          style={{ display: "block" }}
          type="color"
          onChange={(e) => {
            this.props.pickColor(e.target.value);
          }}
        />
        <button
          style={{ borderStyle: "solid" }}
          className={styles.Button}
          onClick={() => this.handleClickedStyle("solid")}
        >
          Solid
        </button>
        <button
          style={{ borderStyle: "dotted" }}
          className={styles.Button}
          onClick={() => this.handleClickedStyle("dotted")}
        >
          Dotted
        </button>
        <button
          style={{ borderStyle: "dashed" }}
          className={styles.Button}
          onClick={() => this.handleClickedStyle("dashed")}
        >
          Dotted
        </button>
        <button
          style={{ borderStyle: "double" }}
          className={styles.Button}
          onClick={() => this.handleClickedStyle("double")}
        >
          Dotted
        </button>
        <div className={styles.Position}>
          <p>Position</p>
          <button
            style={{ borderTopStyle: this.state.borderStyle }}
            className={styles.Button}
            onClick={() => this.props.handleClicked("top")}
          >
            Top
          </button>
          <button
            style={{ borderBottomStyle: this.state.borderStyle }}
            className={styles.Button}
            onClick={() => this.props.handleClicked("bottom")}
          >
            Bottom
          </button>
          <button
            style={{ borderRightStyle: this.state.borderStyle }}
            className={styles.Button}
            onClick={() => this.props.handleClicked("right")}
          >
            Right
          </button>
          <button
            style={{ borderLeftStyle: this.state.borderStyle }}
            className={styles.Button}
            onClick={() => this.props.handleClicked("left")}
          >
            Left
          </button>
        </div>
        <div className={styles.BorderRadius}>
          <p>Border Radius</p>
        </div>
        <Slider
          defaultValue="1"
          label="Top Left"
          min="0"
          max="30"
          propsName="borderTopLeftRadius"
          handleChange={this.props.handleChange}
        />
        <Slider
          defaultValue="1"
          label="Top Right"
          min="0"
          max="30"
          propsName="borderTopRightRadius"
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Border;
