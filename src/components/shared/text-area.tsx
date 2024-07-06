import styles from "./../../styles-modules/input.module.css";

interface TextAreaProps {
  label: string;
  error?: string;
  placeholder: string;
  onChange: (e: string) => void;
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  placeholder,
  onChange,
  value,
  ...rest
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: 15 }}>
      <label style={{ fontSize: 14 }}>{label}:</label>
      <textarea
        className={styles.textAreaUi}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
        value={value}
      />
      {error && (
        <div style={{ color: "#d84040", fontSize: 12, marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
