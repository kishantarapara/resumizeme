import TextInput from "../../components/inputs/text/TextInput";
import formImage from "../../assets/form-image.png";
import Button from "../../components/button/Button";
import { useState } from "react";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    city: "",
    postalCode: "",
    address: "",
    email: "petter@gmail.com",
    phone: "",
    password: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">Personal Information</h1>

      <div className="form-image-container">
        <div className="form-grid">
          <TextInput
            label="First Name"
            placeholder="Petter"
            value={formData.fname}
            onChange={(e) => handleChange("fname", e.target.value)}
          />
          <TextInput
            label="Last Name"
            placeholder="Cetera"
            value={formData.lname}
            onChange={(e) => handleChange("lname", e.target.value)}
          />
          <TextInput
            label="City"
            placeholder="London"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
          <TextInput
            label="Postal Code"
            placeholder="E2 4XF"
            value={formData.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
          />
          <TextInput
            className="address"
            label="Address"
            placeholder="123 Example"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <TextInput
            label="Email"
            placeholder="petter@gmail.com"
            validated={isValidEmail(formData.email)}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextInput
            label="Phone"
            placeholder="+442223334444"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div>
          <img className="form-image" src={formImage} />
        </div>
      </div>
      <div className="form-note">
        Use this email to log in to your <a href="#">resumedone.io</a> account
        and receive notifications.
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default PersonalInfoForm;
