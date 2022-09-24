const TravelDate = (props) => {
  const { duration, from, to } = props.data;
  return (
    <article className="travel-date">
      <h2>Travel date</h2>
      <h1>{duration} days</h1>
      <div>
        <h3>{from}</h3>
        <span className="material-symbols-rounded">sync_alt</span>
        <h3>{to}</h3>
      </div>
    </article>
  );
};

export default TravelDate;
