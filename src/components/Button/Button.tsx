import "./Button.css";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ( { text, variant, type, disabled, onClick } : ButtonProps ) => {
  return (
      <button 
        className={`button ${variant}`} 
        type={type ?? "button"} 
        disabled={disabled}
        onClick={onClick}
        >{text}</button>

  )
}
export default Button;