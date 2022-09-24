const ForecasteItem = (props) => {

  const {status, degree, day} = props;
  const days = ["Mo","Su","Tu", "We", "Th"]

  const forecastStatus = {
    rain: "rainy",
    sun: "sunny",
    lightning: "thunderstorm",
    cloud: "cloudy",
    fog: "foggy",
  };
  return (
    <div className="forecaste-item">
      <span className="material-symbols-rounded">{forecastStatus[status]}</span>
      <h1>{degree}°</h1>
      <h2>{days[day]}</h2>
    </div>
  );
};

export default ForecasteItem;
