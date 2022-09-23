import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/404/index";
import Home from "../pages/home/index";
import Attractions from "../pages/attractions/index";
import Rooms from "../pages/rooms/index";
import Travels from "../pages/travels/index";
import Trips from "../pages/trips/index";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/attractions" element={<Attractions />} />
      <Route exact path="/rooms" element={<Rooms />} />
      <Route exact path="/travels" element={<Travels />} />
      <Route exact path="/trips" element={<Trips />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
