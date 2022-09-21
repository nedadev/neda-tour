import ReactStars from "react-rating-stars-component";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { get } from "../lib/api";

const ToDoList = (props) => {
  const [attractions, setAttractions] = useState([]);


  const getCityAttraction = (city) => {
    // retriving list of trip cities
    get(`/city-attractions?city=${city}`).then((response) => {
      const { status, data } = response;
      console.log({ status, data });
      if (status === 200) {
        setAttractions(data)
      }
    });
  };

  useEffect(()=>{
    getCityAttraction("rome");
  },[])

  return (
    <section className="todo-list-item-wrapper">
      <h1>Top attractions</h1>
      {attractions.map((attraction, index) => {
        const {name, image, location, rate} = attraction;
        return (
          <div key={`todo-list-item-${index}`} className="todo-list-item">
            <Avatar 
              className="todo-list-item-avatar"
              name="Neda Azizi"
              round={true}
              size={"5rem"}
              src={image}
            />
            <h2>{name}</h2>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={14}
              value={rate}
              edit={false}
              activeColor="#ffd700"
              classNames="todo-list-item-rating"
            />
            <button className="todo-list-item-btn" onClick={()=> window.open(location, "_blank")}>
              <span className="material-symbols-rounded">near_me</span>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ToDoList;
