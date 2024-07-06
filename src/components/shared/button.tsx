import style from "./../../styles-modules/button.module.css";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ text, type, onClick, disabled = false }: ButtonProps) => {
  return (
    <div style={{ marginTop: 15 }}>
      <button className={style.buttonUi} onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
