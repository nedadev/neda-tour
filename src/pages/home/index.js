import Carousel from "../../components/Carousel"
import DestinationInfo from "../../components/DestinationInfo"
import ToDoList from "../../components/ToDoList"
import TimeLine from "../../components/TimeLine"



function Home() {
  return (
    <>
      <section className="destinations">
        {/* Carousel */}
        <Carousel />
        {/* destination info */}
        <DestinationInfo />
        {/* TODOs */}
        <ToDoList />
      </section>
      <TimeLine />
    </>
  );
}

export default Home;
