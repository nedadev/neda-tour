// styles
import "./styles/App.css";
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return(
    <div className="app-body">
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
