import "./page.css"; // Import the CSS file
import PersonalInfoForm from "./PersonalInfoForm";
import PremiumAccountCard from "./PremiumAccountCard";

export default function ProfilePage() {
  console.log("Hello");
  return (
    <div className="profile-container">
      <PremiumAccountCard />
      <PersonalInfoForm />
    </div>
  );
}
