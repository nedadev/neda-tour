import React, { useState } from "react";
import Calendar from "react-calendar";
import Event from "./Event";

const TimeLine = (props) => {
  const [value, onChange] = useState(new Date());
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
        <Event timeFrom="08:15" timeTo="08:30" description="Taxi to airport" />
        <Event
          timeFrom="10:45"
          timeTo="12:00"
          description="Amsterdam to Rome"
        />
        <Event timeFrom="13:00" timeTo="13:30" description="Airport to Hotel" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
        <Event timeFrom="14:00" timeTo="14:30" description="Check-in" />
      </section>
    </aside>
  );
};

export default TimeLine;
