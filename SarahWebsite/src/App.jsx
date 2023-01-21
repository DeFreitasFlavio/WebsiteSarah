import "./App.css";
import Header from "./components/Header/header";
import Carousel from "./components/Carousel/carousel";
import Details from "./components/Details/details";
import Photo from "./components/photo/photo";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Details />
      <Photo />
      <Footer />
    </div>
  );
}

export default App;
