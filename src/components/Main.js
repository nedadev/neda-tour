import Carousel from "./Carousel";
import DestinationInfo from "./DestinationInfo";
import ToDoList from "./ToDoList";
import TimeLine from "./TimeLine";

const Main = (props) => {
  return (
    <main className="app-main">
      <section className="destinations">
        {/* Carousel */}
        <Carousel />
        {/* destination info */}
        <DestinationInfo />
        {/* TODOs */}
        <ToDoList />
      </section>
      <TimeLine />
    </main>
  );
};

export default Main;
