const NavigationItem = (props) => {
  const {icon, label}= props;
  return (
    <div className="navigation-item">
      <span class="material-symbols-rounded">{icon}</span>
      <h1>{label}</h1>
    </div>
  );
};

export default NavigationItem;
