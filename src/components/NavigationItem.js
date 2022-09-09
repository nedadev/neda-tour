const NavigationItem = (props) => {
  const {icon, label}= props;
  return (
    <div className="navigation-item">
      <span className="material-symbols-rounded">{icon}</span>
      <h1>{label}</h1>
    </div>
  );
};

export default NavigationItem;
