import React, { useState } from "react";
import Calendar from "react-calendar";

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
      <Calendar tileClassName="react-calendar" onChange={onChange} value={value} />
    </aside>
  );
};

export default TimeLine;
