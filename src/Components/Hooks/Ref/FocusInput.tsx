import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    inputElement.current?.focus();
  };
  return (
    <div>
      <input type="text" placeholder="Enter your Name" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
