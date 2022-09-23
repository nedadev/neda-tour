const WIP = (props) => {

  const images = [
    require("../assets/cat-1.jpg"),
    require("../assets/cat-2.jpg"),
    require("../assets/cat-3.jpg"),
    require("../assets/cat-4.jpg"),
  ]

  return (
    <section className="wip-main">
      <img
        src={images[props.num]}
        alt="sleepy cat work in progress"
        style={{ width: "60%", borderRadius: "10px" }}
      />
      <p>
        This page is a work in progress
        <br />
        Please check again soon!
      </p>
    </section>
  );
};

export default WIP;
