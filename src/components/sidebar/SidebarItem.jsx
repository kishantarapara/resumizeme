const SidebarItem = ({ label, icon, bold, endIcon, className }) => {
  return (
    <div className={`menu-item ${className} ${bold ? "fw-bold" : ""}`}>
      {icon}
      <span>{label}</span>
      {endIcon && (
        <>
          <div className="spacer"></div>
          {endIcon}
        </>
      )}
    </div>
  );
};

export default SidebarItem;
