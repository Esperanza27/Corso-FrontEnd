import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import MoviesDetails from "./pages/MoviesDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/details/:movieID" element={<MoviesDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
