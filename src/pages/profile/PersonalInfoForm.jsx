import TextInput from "../../components/inputs/text/TextInput";
import formImage from "../../assets/form-image.png";
import Button from "../../components/button/Button";

const PersonalInfoForm = () => {
  return (
    <div>
      <h1 className="title">Personal Information</h1>

      <div className="form-image-container">
        <div className="form-container">
          <div className="form-row">
            <TextInput label="First Name" placeholder="Petter" />
            <TextInput label="Last Name" placeholder="Cetera" />
          </div>
          <div className="form-row">
            <TextInput label="City" placeholder="London" />
            <TextInput label="Postal Code" placeholder="E2 4XF" />
          </div>
          <div className="form-row">
            <TextInput label="Address" placeholder="123 Example" />
          </div>
          <div className="form-row">
            <TextInput label="Email" placeholder="petter@gmail.com" validated />
            <TextInput label="Phone" placeholder="+442223334444" />
          </div>
          <div className="form-row">
            <TextInput
              className="form-col"
              label="Password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <img className="form-image" src={formImage} />
        </div>
      </div>
      <div className="form-note">
        Use this email to log in to your <a href="#">resumedone.io</a> account
        and receive notifications.
      </div>
      <Button>Save</Button>
    </div>
  );
};

export default PersonalInfoForm;
