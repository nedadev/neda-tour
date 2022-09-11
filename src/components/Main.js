import Carousel from "./Carousel";
import DestinationInfo from "./DestinationInfo";
import ToDoList from "./ToDoList";

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
      <aside className="timeline">hello word</aside>
    </main>
  );
};

export default Main;
