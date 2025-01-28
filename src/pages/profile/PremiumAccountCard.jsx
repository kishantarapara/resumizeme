import career from "../../icons/career.svg";

const PremiumAccountCard = () => {
  return (
    <div className="premium-account-card">
      <div className="premium-account-icon">
        <img src={career} height={100} width={100} />
      </div>
      <div>
        <h4 className="title">Premium Account</h4>
        <p className="premium-account-card-desc">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

export default PremiumAccountCard;
