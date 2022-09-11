const Event = (props) => {
  const { timeFrom, timeTo, description } = props;
  return (
    <article className="timeline-event">
      <h1>
        {timeFrom} - {timeTo}
      </h1>
      <h1>{description}</h1>
    </article>
  );
};

export default Event;
