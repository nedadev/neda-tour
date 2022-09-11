import TripStatistics from "./TripStatistics";

const Facilities = (props) => {
  const { circleColor, name } = props;
  return (
    <div style={{ display: "flex", alignItems:"center", gap:".8rem" }}>
      <span
        className="material-symbols-rounded"
        style={{ color: circleColor, fontSize: "1.7rem" }}
      >
        trip_origin
      </span>
      <h3 style={{ fontWeight: "600", fontSize: "1.4rem", color: "#27292C" }}>
        {name}
      </h3>
    </div>
  );
};
// const fakeData = [
//   {
//     city: "Rome",
//     image:
//       "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     statistics: {
//       transport: 60,
//       hotel: 30,
//       other: 10,
//     },
//   },
// ];

const Carousel = (props) => {
  const bgImg =
    "https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section className="carousel">
      {/* image */}
      <div
        className="carousel-image-slide"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2>Nearest trip</h2>
        <h1>Rome</h1>
        <div className="carousel-btn-wrapper">
          <button className="carousel-btn">
            <span className="material-symbols-rounded">west</span>
          </button>
          <button className="carousel-btn">
            <span className="material-symbols-rounded">east</span>
          </button>
        </div>
      </div>

      {/* statistics */}
      <div className="carousel-statistics">
        <h2>Expenses</h2>
        <TripStatistics num1={60} num2={30} num3={10}/>
        <div className="carousel-facilities">
          <Facilities circleColor={"#02AF72"} name={"Transport"} />
          <Facilities circleColor={"#6C50FC"} name={"Hotel"} />
          <Facilities circleColor={"#FF742C"} name={"Other"} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
