import NavigationItem from "./NavigationItem";
import ForecastItem from "./ForecastItem";


const Navigation = (prpos) => {
  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
        <div>
          <header>
            <span className="material-symbols-rounded">flight_takeoff</span>
            <h1>Ntour</h1>
          </header>
          <button className="navigation-new-trip-btn">
            <h2>New Trip</h2>
            <span className="material-symbols-rounded">add</span>
          </button>
        </div>

        {/* menu */}
        <ul>
          <li>
            <NavigationItem icon="home" label="Home" />
          </li>

          <li>
            <NavigationItem icon="calendar_month" label="All trips" />
          </li>

          <li>
            <NavigationItem icon="flight" label="Travels" />
          </li>

          <li>
            <NavigationItem icon="bed" label="Rooms" />
          </li>

          <li>
            <NavigationItem icon="attractions" label="Attractions" />
          </li>
        </ul>

        {/* forecast */}
        <article>
          <div className="navigation-forecast-header">
            <span className="material-symbols-rounded" id="navigation-forecast-icon">sunny</span>
            <div className="navigation-forecast-location">
              <h1>30°</h1>
              <div className="navigation-forecast-location-wrapper">
                <span className="material-symbols-rounded">near_me</span>
                <h3>Rome</h3>
              </div>
            </div>
          </div>
          <div className="navigation-forecast-footer">
            <ul>
              <li><ForecastItem/></li>
              <li><ForecastItem/></li>
              <li><ForecastItem/></li>
              <li><ForecastItem/></li>
              <li><ForecastItem/></li>
            </ul>
          </div>
        </article>

        {/* support */}
        <footer className="navigation-footer">
          <span className="material-symbols-rounded">contact_support</span>
          <h2>Support</h2>
        </footer>
      </div>
    </nav>
  );
};

export default Navigation;
