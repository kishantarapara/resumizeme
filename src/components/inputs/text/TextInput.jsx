import checkMark from "../../../icons/checkMark.svg";
import "./textInput.css";

const TextInput = ({ label, validated, ...props }) => {
  return (
    <div className="my-input">
      <fieldset aria-hidden="true">
        <legend>{label}</legend>
        <input {...props} />
        {validated && <img src={checkMark} />}
      </fieldset>
    </div>
  );
};

export default TextInput;
