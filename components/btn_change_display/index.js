import styles from "./btn.module.css";
import { RxUpdate } from "react-icons/rx";

export default function BtnChangeDisplay(props) {
  return (
    <button
      className={styles.btn_change_display}
      title="Click to change the position of the editors"
      onClick={props.handleChangePosition}
    >
      <RxUpdate style={{ marginBottom: "-3px" }} /> Change Editors&apos;s
      Position
    </button>
  );
}
