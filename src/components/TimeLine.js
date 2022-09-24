import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Event from "./Event";
import {get} from "../lib/api";

const TimeLine = (props) => {
  const [value, onChange] = useState(new Date());

  const [events, setEvents] = useState([]);

  const getEvents = () => {
    get(`/events`).then((response) => {
      const { status, data } = response;
      // console.log({ status, data });
      if (status === 200) {
        setEvents(data)
      }
    });
  };

  useEffect(()=>{
    getEvents();
  },[])

  const dataEventsList = () => {
    return events.map((data, index) => {
      const { from, to, event } = data;
      return (
        <div key={`event-item-${index}`}>
          <Event
            timeFrom={from}
            timeTo={to}
            description={event}
          />
        </div>
      );
    });
  };

  return (
    <aside className="timeline">
      <div className="timeline-heading-wrapper">
        <h1>Timeline</h1>
        <button>
          Add event
          <span className="material-symbols-rounded">add</span>
        </button>
      </div>
      <Calendar
        tileClassName="react-calendar"
        onChange={onChange}
        value={value}
      />
      <section className="timeline-schedule">
        {dataEventsList()}
      </section>
    </aside>
  );
};

export default TimeLine;
