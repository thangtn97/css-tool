import React from "react";
import styles from "./Preview.module.css";
import { withRouter } from "react-router-dom";

const preview = (props) => {
  const type = props.match.params.page;
  const properties = props.properties;
  let style = null;
  let preview = null;
  let code = null;
  switch (type) {
    case "box-shadow":
      code = (
        <code>
          box-shadow: rgba(0, 0, 0, {properties.opacity * 0.01})
          {properties.horiOffset}
          px {properties.vertiOffset}px {properties.blur}px {properties.spread}
          px
        </code>
      );
      style = {
        boxShadow: `${properties.horiOffset}px ${properties.vertiOffset}px ${
          properties.blur
        }px ${properties.spread}px rgba(0, 0, 0, ${properties.opacity * 0.01})`,
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
