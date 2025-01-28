import "./button.css";
const Button = ({ children, version = "primary", ...props }) => {
  return (
    <button className={version} {...props}>
      {children}
    </button>
  );
};

export default Button;
