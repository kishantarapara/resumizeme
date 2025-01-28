import "./button.css";
const Button = ({ children, type = "primary", ...props }) => {
  return (
    <button className={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
