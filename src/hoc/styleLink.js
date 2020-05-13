import React from "react";
import styles from "./Style.module.css";

const styleLink = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props} className={styles.Link}>
          {this.props.children}
        </WrappedComponent>
      );
    }
  };
};
export default styleLink;
