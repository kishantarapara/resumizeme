import "./textInput.css";

const TextInput = ({ label, ...props }) => {
  return (
    <div className="my-input">
      <fieldset aria-hidden="true">
        <legend>{label}</legend>
        <input {...props} />
      </fieldset>
    </div>
  );
};

export default TextInput;
