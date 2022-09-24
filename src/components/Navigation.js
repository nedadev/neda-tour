import { Link } from "react-router-dom";
import Forecast from "./Forecast";
import NavigationItem from "./NavigationItem";

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
        <Forecast />
        
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
