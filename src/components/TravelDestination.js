import ReactCountryFlag from "react-country-flag";

const GetCountry = (props) => {
  const { code, name } = props;
  return (
    <div style={{ display: "flex" }}>
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{
          width: "1.6em",
          height: "1.6em",
          marginRight: "1rem",
        }}
        title={code}
      />
      <h3>{name}</h3>
    </div>
  );
};

const TravelDestination = (props) => {
  const { city, from, to, est} = props.data;
  return (
    <article className="travel-destination">
      <h2>Destination</h2>
      <h1>{city}</h1>
      <div className="travel-destination-flight-info">
        <div className="travel-destination-flight-info-country">
          <GetCountry name={from.country} code={from.flag} />
          <span
            className="material-symbols-rounded"
            style={{ margin: "0 1rem" }}
          >
            sync_alt
          </span>
          <GetCountry name={to.country} code={to.flag} />
        </div>
        <div  className="travel-destination-flight-info-flight">
          <span
            className="material-symbols-rounded"
            style={{ marginRight: "1rem" }}
          >
            flight
          </span>
          <h3>{est} flight</h3>
        </div>
      </div>
    </article>
  );
};

export default TravelDestination;
