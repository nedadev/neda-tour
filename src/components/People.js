const People = (props) => {
  const { num, passengers} = props.data;
  return (
    <article className="people">
      <h2>People</h2>
      <h1>
        {num} <span>/adults</span>
      </h1>
      <div>
        <h3>{passengers.join(" , ")}</h3>
        <button>
          <span className="material-symbols-rounded">add_circle</span>
        </button>
      </div>
    </article>
  );
};

export default People;
