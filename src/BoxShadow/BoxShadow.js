import React from "react";
import styles from "./BoxShadow.module.css";

class BoxShadow extends React.Component {
  state = {
    boxShadow: {
      horiOffset: 5,
      vertiOffset: 5,
      spread: 5,
      blur: 20,
      opacity: 3,
    },
  };
  handleChange = (value, propsName) => {
    this.setState({
      ...this.state,
      boxShadow: {
        ...this.state.boxShadow,
        [propsName]: value,
      },
    });
    this.props.handleChange(value, propsName);
  };
  render() {
    const layers = this.props.layers;
    const listLayer = Object.keys(layers).map((key) => {
      return (
        <p
          onClick={() => {
            this.setState({
              ...this.state,
              boxShadow: layers[key],
            });
            this.props.selectLayer(key);
          }}
        >
          {layers[key].horiOffset}px {layers[key].vertiOffset}px
        </p>
      );
    });
    return (
      <div className={styles.BoxShadow}>
        <div className={styles.Property}>
          <label>Shift right</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={this.state.boxShadow.horiOffset}
            onChange={(e) => this.handleChange(e.target.value, "horiOffset")}
          />
          <label>Shift down</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={this.state.boxShadow.vertiOffset}
            onChange={(e) => this.handleChange(e.target.value, "vertiOffset")}
          />
          <label>Blur</label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.boxShadow.blur}
            onChange={(e) => this.handleChange(e.target.value, "blur")}
          />
          <label>Spread</label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.boxShadow.spread}
            onChange={(e) => this.handleChange(e.target.value, "spread")}
          />
          <label>Opacity</label>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.boxShadow.opacity}
            onChange={(e) => this.handleChange(e.target.value, "opacity")}
          />
        </div>
        <span className={styles.Span}></span>
        <button
          onClick={() => this.props.handleBtnAddClick(this.state.boxShadow)}
        >
          Add
        </button>
        {listLayer}
      </div>
    );
  }
}
export default BoxShadow;
