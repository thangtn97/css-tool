import React, { Component } from "react";
import styles from "./App.module.css";
import BoxShadow from "./BoxShadow/BoxShadow";
import Preview from "./Preview/Preview";
import Border from "./Border/Border";
import styleLink from "./hoc/styleLink";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    idLayer: 0,
    boxShadow: {
      0: {
        horiOffset: 5,
        vertiOffset: 0,
        spread: 3,
        blur: 5,
        opacity: 20,
      },
    },
    properties: {
      borderRadius: 1,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
    },
    color: "#ccc",
    pos: "",
    borderStyle: "solid",
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
  onHandleChange1 = (value) => {
    this.setState({
      ...this.state,
      properties: {
        ...this.state.properties,
        opacity: value,
      },
    });
  };
  onHandleBtnClick = () => {
    const layer = {
      horiOffset: 0,
      vertiOffset: 0,
      blur: 5,
      spread: 3,
      opacity: 20,
    };
    this.setState({
      ...this.state,
      boxShadow: {
        ...this.state.boxShadow,
        [new Date()]: layer,
      },
    });
  };
  onSelectLayer = (id) =>
    this.setState({
      idLayer: id,
    });
  onHandleChange = (value, propsName) => {
    this.setState({
      ...this.state,
      boxShadow: {
        ...this.state.boxShadow,
        [this.state.idLayer]: {
          ...this.state.boxShadow[this.state.idLayer],
          [propsName]: value,
        },
      },
    });
    console.log(this.state.boxShadow);
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
                render={() => (
                  <BoxShadow
                    layers={this.state.boxShadow}
                    handleBtnAddClick={this.onHandleBtnClick}
                    handleChange={this.onHandleChange}
                    selectLayer={this.onSelectLayer}
                  />
                )}
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
            </Switch>
          </div>
          <Route
            path="/:page"
            render={() => (
              <Preview
                color={this.state.color}
                pos={this.state.pos}
                boxShadow={this.state.boxShadow}
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
