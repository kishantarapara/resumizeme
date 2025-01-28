import checkMark from "../../../icons/checkMark.svg";
import "./textInput.css";

const TextInput = ({ label, className, validated, ...props }) => {
  return (
    <div className={`my-input ${className ?? ""}`}>
      <fieldset>
        <legend>{label}</legend>
        <input {...props} />
        {validated && <img src={checkMark} />}
      </fieldset>
    </div>
  );
};

export default TextInput;
