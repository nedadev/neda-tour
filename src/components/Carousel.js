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
      <div className="carousel-statistics"></div>
    </section>
  );
};

export default Carousel;
