import React, { Component } from "react";
import styles from "./App.module.css";
import BoxShadow from "./BoxShadow/BoxShadow";
import Preview from "./Preview/Preview";
import TextShadow from "./TextShadow/TextShadow";
import Border from "./Border/Border";
import styleLink from "./hoc/styleLink";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    properties: {
      horiOffset: 0,
      vertiOffset: 0,
      spread: 3,
      blur: 5,
      opacity: 20,
      borderRadius: 1,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
    },
    color: "#ccc",
    pos: "",
    borderStyle: "solid",
  };

  onHandleChange = (value, propsName) => {
    let newProps = { ...this.state.properties };
    newProps[`${propsName}`] = value;
    this.setState({
      properties: newProps,
    });
  };
  onHandleClickedStyle = (value) => {
    console.log(value);
    this.setState({
      borderStyle: value,
    });
  };
  onHandlePositon = (value) => {
    console.log("clicked");
    this.setState({
      pos: value,
    });
  };

  onHandlePickColor = (value) => {
    this.setState({
      color: value,
    });
  };

  render() {
    const StyleLink = styleLink(Link);
    return (
      <BrowserRouter>
        <div className={styles.Nav}>
          <StyleLink to="/box-shadow">BoxShadow</StyleLink>
          <StyleLink to="/border">Border</StyleLink>
        </div>
        <div className={styles.App}>
          <div className={styles.PropsCard}>
            <h4> Properties</h4>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/box-shadow" />}
              />
              <Route
                path="/box-shadow"
                render={() => <BoxShadow handleChange={this.onHandleChange} />}
              />
              <Route
                path="/border"
                render={() => (
                  <Border
                    handleChange={this.onHandleChange}
                    handleClicked={this.onHandlePositon}
                    handleClickedStyle={this.onHandleClickedStyle}
                    pickColor={this.onHandlePickColor}
                  />
                )}
              />
              <Route path="/text-shadow" component={TextShadow} />
            </Switch>
          </div>
          <Route
            path="/:page"
            render={() => (
              <Preview
                color={this.state.color}
                pos={this.state.pos}
                properties={this.state.properties}
                borderStyle={this.state.borderStyle}
                borderRadius={this.state.properties.borderRadius}
                borderTopLeftRadius={this.state.properties.borderTopLeftRadius}
                borderTopRightRadius={
                  this.state.properties.borderTopRightRadius
                }
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
