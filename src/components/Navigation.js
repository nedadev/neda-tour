import { Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import ForecastItem from "./ForecastItem";

const Navigation = (prpos) => {
  const onMenuClosed = () => {
    document.getElementById("navigation").style.display = "none";
  };

  return (
    <nav className="navigation" id="navigation">
      <div className="navigation-wrapper">
        <div>
          <header>
            <span className="material-symbols-rounded">flight_takeoff</span>
            <h1>MyTrip</h1>
          </header>
          <button className="navigation-new-trip-btn">
            <h2>New Trip</h2>
            <span className="material-symbols-rounded">add</span>
          </button>
        </div>

        {/* menu */}
        <ul>
          <li>
            <Link className="react-router-dom-link" to="/">
              <NavigationItem icon="home" label="Home" />
            </Link>
          </li>

          <li>
            <Link className="react-router-dom-link" to="/trips">
              <NavigationItem icon="calendar_month" label="All trips" />
            </Link>
          </li>

          <li>
            <Link className="react-router-dom-link" to="/travels">
              <NavigationItem icon="flight" label="Travels" />
            </Link>
          </li>

          <li>
            <Link className="react-router-dom-link" to="/rooms">
              <NavigationItem icon="bed" label="Rooms" />
            </Link>
          </li>

          <li>
            <Link className="react-router-dom-link" to="/attractions">
              <NavigationItem icon="attractions" label="Attractions" />
            </Link>
          </li>
        </ul>

        {/* forecast */}
        <article>
          <div className="navigation-forecast-header">
            <span
              className="material-symbols-rounded"
              id="navigation-forecast-icon"
            >
              sunny
            </span>
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
              <li>
                <ForecastItem />
              </li>
              <li>
                <ForecastItem />
              </li>
              <li>
                <ForecastItem />
              </li>
              <li>
                <ForecastItem />
              </li>
              <li>
                <ForecastItem />
              </li>
            </ul>
          </div>
        </article>

        {/* support */}
        <footer className="navigation-footer">
          <span className="material-symbols-rounded">contact_support</span>
          <h2>Support</h2>
        </footer>
      </div>
      <button id="navigation-close" onClick={() => onMenuClosed()}>
        <span className="material-symbols-rounded">
          keyboard_double_arrow_left
        </span>
      </button>
    </nav>
  );
};

export default Navigation;
