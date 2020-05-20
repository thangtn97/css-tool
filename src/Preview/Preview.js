import React from "react";
import styles from "./Preview.module.css";
import { withRouter } from "react-router-dom";

const preview = (props) => {
  const type = props.match.params.page;
  let style = null;
  let preview = null;
  let code = null;
  let boxShadowStyle = `${props.boxShadow[0].horiOffset}px ${
    props.boxShadow[0].vertiOffset
  }px ${props.boxShadow[0].blur}px ${
    props.boxShadow[0].spread
  }px rgba(0, 0, 0, ${props.boxShadow[0].opacity * 0.01})`;
  switch (type) {
    case "box-shadow":
      console.log(props.boxShadow);
      Object.keys(props.boxShadow)
        .filter((key) => key !== 0)
        .forEach((key) => {
          boxShadowStyle =
            `rgba(0, 0, 0, ${props.boxShadow[key].opacity * 0.01})${
              props.boxShadow[key].horiOffset
            }px ${props.boxShadow[key].vertiOffset}px ${
              props.boxShadow[key].blur
            }px ${props.boxShadow[key].spread}px,` + boxShadowStyle;
        });
      style = {
        boxShadow: boxShadowStyle,
      };
      preview = <div style={style} className={styles.BoxPreview}></div>;
      break;

    case "border":
      style = {
        borderStyle: `${props.borderStyle}`,
        borderColor: `${props.color}`,
        borderTopLeftRadius: `${props.borderTopLeftRadius}px`,
        borderTopRightRadius: `${props.borderTopRightRadius}`,
      };

      switch (props.pos) {
        case "top":
          code = (
            <code>
              border-top: 1px {props.borderStyle} {props.color}
            </code>
          );
          style = {
            borderTopStyle: `${props.borderStyle}`,
          };
          break;
        case "bottom":
          code = (
            <code>
              border-bottom: 1px {props.borderStyle} {props.color}
            </code>
          );

          style = {
            borderBottomStyle: `${props.borderStyle}`,
          };
          break;
        case "right":
          code = (
            <code>
              border-right: 1px {props.borderStyle} {props.color}
            </code>
          );
          style = {
            borderRightStyle: `${props.borderStyle}`,
          };
          break;
        case "left":
          code = (
            <code>
              border-left: 1px {props.borderStyle} {props.color}
            </code>
          );

          style = {
            borderLeftStyle: `${props.borderStyle}`,
          };
          break;
        default:
          code = (
            <div>
              <code>
                border: 1px {props.borderStyle} {props.color}{" "}
              </code>
              <code>
                border-radius: {props.borderTopLeftRadius}px{" "}
                {props.borderTopRightRadius}px
              </code>
            </div>
          );
      }
      preview = <div style={style} className={styles.BoxPreview}></div>;
      break;
    default:
      break;
  }
  console.log(props.borderTopLeftRadius);
  return (
    <div className={styles.PreviewCard}>
      <div className={styles.Preview}>
        <h4>Preview</h4>
        {preview}
      </div>
      <div className={styles.Code}>
        <h4>CSS Code</h4>
        <code>{code}</code>
      </div>
    </div>
  );
};
export default withRouter(preview);
