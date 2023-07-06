import styles from "./ModalOverlay.module.css";

export default function ModalOverlay({ handleClose }) {
  return <div onClick={() => handleClose()} className={styles.popup}></div>;
}
