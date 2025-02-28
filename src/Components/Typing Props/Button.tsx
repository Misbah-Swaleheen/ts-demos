import { FC } from "react";

interface ButtonSahpe {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonSahpe> = ({ label, onClick, disabled }: ButtonSahpe) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
