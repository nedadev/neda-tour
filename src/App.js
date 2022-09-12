// styles
import "./styles/App.css";
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const onMenuClicked=()=>{
    document.getElementById("navigation").style.display = "flex";
    document.getElementById("navigation-close").style.display = "flex";
  }

  return (
    <div className="app-body">
      <Header />
      <button className="navigation-open" onClick={()=>onMenuClicked()}>
        <span className="material-symbols-rounded">double_arrow</span>
      </button>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
