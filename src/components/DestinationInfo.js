import {useEffect, useState} from "react";
import {get} from "../lib/api";
import People from "./People";
import TravelDate from "./TravelDate";
import TravelDestination from "./TravelDestination";


const DestinationInfo = (props) => {
  
  const [dataIsLoded, setDataIsLoaded] = useState(false);
  const [info, setInfo] = useState({});

  const getInfo = () => {
    get(`/destination-info`).then((response) => {
      const { status, data } = response;
      // console.log({ status, data });
      if (status === 200) {
        setInfo(data)
        setDataIsLoaded(true)
      }
    });
  };

  useEffect(()=>{
    getInfo();
  },[])
 if(dataIsLoded) return (
    <section className="destination-info">
      <TravelDate data={info.travel}/>
      <People data={info.people}/>
      <TravelDestination data={info.destinations}/>
    </section>
  );
};

export default DestinationInfo;
