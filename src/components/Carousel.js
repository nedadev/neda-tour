import { useEffect, useState } from "react";
import TripStatistics from "./TripStatistics";
import {get} from "../lib/api";

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

const Carousel = (props) => {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    // retriving list of trip cities
    get("/cities").then((response)=>{
      const {status, data} = response;
      console.log({status, data});
      if(status === 200){
        setCities(data);
      }
    })
  }, []);

 if(cities.length > 0) return (
       <section className="carousel">
      {/* image */}
   
      <div
        className="carousel-image-slide"
        style={{
          backgroundImage: `url(${cities[0].image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2>Nearest trip</h2>
        <h1>{cities[0].city}</h1>
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
        <TripStatistics num1={cities[0].statistics.transport} num2={cities[0].statistics.hotel} num3={cities[0].statistics.other}/>
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
