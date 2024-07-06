import React, { InputHTMLAttributes } from "react";
import styles from "./../../styles-modules/input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: 15 }}>
      <label style={{ fontSize: 14 }}>{label}:</label>
      <input className={styles.inputUi} {...rest} />
      {error && (
        <div style={{ color: "#d84040", fontSize: 12, marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
