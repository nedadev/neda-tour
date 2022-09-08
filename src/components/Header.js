import Avatar from "react-avatar";
import ReactCountryFlag from "react-country-flag";

const Header = (props) => {
  return (
    <header className="app-header">
      <section className="app-header-filter"></section>
      <section className="app-header-profile">
        <ReactCountryFlag
          style={{
            width: "2.8em",
            height: "2.8em",
            borderRadius: "50%",
          }}
          countryCode="GB"
          svg
          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
          cdnSuffix="svg"
          title="GB"
        />

        <div className="profile-notifications-wrapper">
          <span class="material-symbols-rounded">notifications</span>
          <div className="profile-notifications-dot" />
        </div>

        <h1 className="profile-name">Neda Azizi</h1>

        <div className="profile-picture-wrapper">
          <Avatar name="Neda Azizi" round={true} size={"5rem"} />
          <div className="profile-picture-dot" />
        </div>
      </section>
    </header>
  );
};

export default Header;
