import React from "react";
import { Link } from "react-router-dom";

class StyleLink extends Link {
  render() {
    const link = super.render();
    return <Link {...link.props}>{props.children}</Link>;
  }
}
export default StyleLink;
