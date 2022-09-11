const TripStatistics = (props) => {
  const { num1, num2, num3 } = props;

  const getSize = (num) => {
    if (num < 30) return "6.8rem";
    if (num >= 30 && num < 60) return "9.8rem";
    return "12rem";
  };
  return (
    <article className="trip-statistics">
      <div
        className="trip-statistics-div trip-statistics-div-1"
        style={{
          width: getSize(num1),
          height: getSize(num1),
          background:
            "linear-gradient(206.38deg, #02AF72 16.58%, rgba(2, 175, 114, 0.5) 100.02%)",
          boxShadow: "0px 12.6115px 33.6306px rgba(108, 80, 252, 0.24)",
          borderRadius: "50%",
        }}
      >
        <h1>{num1}%</h1>
      </div>
      <div
        className="trip-statistics-div trip-statistics-div-2"
        style={{
          width: getSize(num2),
          height: getSize(num2),
          background:
            "linear-gradient(206.5deg, #6C50FC 16.64%, rgba(108, 80, 252, 0.5) 100.18%)",
          boxShadow: "0px 13.7601px 36.6937px rgba(2, 175, 114, 0.24)",
          borderRadius: "50%",
        }}
      >
        <h1>{num2}%</h1>
      </div>
      <div
        className="trip-statistics-div trip-statistics-div-3"
        style={{
          width: getSize(num3),
          height: getSize(num3),
          background:
            "linear-gradient(225.42deg, #FF742C -0.22%, rgba(255, 116, 44, 0.5) 100.16%)",
          boxShadow: "0px 12.6115px 33.6306px rgba(255, 116, 44, 0.24)",
          borderRadius: "50%",
        }}
      >
        <h1>{num3}%</h1>
      </div>
    </article>
  );
};

export default TripStatistics;
