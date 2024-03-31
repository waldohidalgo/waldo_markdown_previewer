import React from "react";
import styles from "./editor.module.css";
import { CiMemoPad } from "react-icons/ci";

export default function Editor(props) {
  const handleChange = (event) => {
    if (props.name === "Markdown Editor") {
      props.handleChange(event);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        <CiMemoPad style={{ marginBottom: "-5px" }} /> {props.name}
      </h2>
      {props.name === "Markdown Editor" ? (
        <textarea
          id="editor"
          className={`${styles.textarea}`}
          value={props.value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <div
          id="preview"
          className={`${styles.textarea} ${styles.preview}`}
        ></div>
      )}
    </div>
  );
}
