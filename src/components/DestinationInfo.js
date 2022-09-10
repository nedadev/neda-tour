import People from "./People";
import TravelDate from "./TravelDate";
import TravelDestination from "./TravelDestination";

const DestinationInfo = (props) => {
  return (
    <section className="destination-info">
      <TravelDate />
      <People />
      <TravelDestination />
    </section>
  );
};

export default DestinationInfo;
