import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { Checkbox } from "../../components/inputs/checkbox/Checkbox";
import "./page.css"; // Import the CSS file
import PersonalInfoForm from "./PersonalInfoForm";
import PremiumAccountCard from "./PremiumAccountCard";
import { ProfileFooter } from "./ProfileFooter";

export default function ProfilePage() {
  console.log("Hello");
  return (
    <div className="profile-container">
      <PremiumAccountCard />
      <PersonalInfoForm />
      <div className="show-profile-checkbox">
        <Checkbox>
          Show my profile to serious employers on{" "}
          <a href="#">hirethesbest.io</a> for free
        </Checkbox>
      </div>
      <Card>
        <Card.Header>Delete account</Card.Header>
        <Card.Body>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </Card.Body>
        <Card.Footer>
          <Button version="link">Yes, Delete my account</Button>
        </Card.Footer>
      </Card>
      <div className="support-line">
        <a href="#">Get in touch with our support team</a> if you have any
        questions or want to leave some feedback.
        <br />
        We’ll be happy to hear from you.
      </div>
      <ProfileFooter />
    </div>
  );
}
