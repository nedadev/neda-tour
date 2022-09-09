import Slider from "./Slider"
import DestinationInfo from "./DestinationInfo"
import DestinationMap from "./DestinationMap"
import ToDoList from "./ToDoList"


const Main = (props)=>{
    return(
        <main className="app-main">
            <section className="destinations">
                {/* slider */}
                <Slider/>
                {/* destination info */}
                <DestinationInfo/>
                <div className="destination-footer-wrapper">
                    {/* destination map */}
                    <DestinationMap/>
                    {/* TODOs */}
                    <ToDoList/>
                </div>
            </section>
            <aside className="timeline">hello word</aside>
        </main>
    )
}

export default Main;