/* App.js */
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
return (
<div className="main-page">
<header>
<Header title="Galería de Imágenes con
React" />
</header>
<hr className="hr"></hr>
<div className="container">
<div className="card-container row-cols-1 row-cols-md-3 g-4">
<Cards
          picture="https://images.pexels.com/photos/6720668/pexels-photo-6720668.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="mercedez gts"
          brand="Mercedez-Benz"
          model="GTS"
        />
        <Cards
          picture="https://images.pexels.com/photos/8863184/pexels-photo-8863184.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="toyota supra"
          brand="Toyota"
          model="Supra MK4"
        />
        <Cards
          picture="https://images.pexels.com/photos/9139594/pexels-photo-9139594.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="lamborghini huracan"
          brand="Lamborghini"
          model="Huracan"
        />
                </div>
        <div className="card-container row-cols-1 row-cols-md-3 g-4">
        <Cards
          picture="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="audi r8"
          brand="Audi"
          model="R8"
        />
        <Cards
          picture="https://images.pexels.com/photos/6152807/pexels-photo-6152807.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="mclaren mp4 12c"
          brand="Mclaren"
          model="MP4 12C"
        />
        <Cards
          picture="https://images.pexels.com/photos/12565879/pexels-photo-12565879.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="ford gt40"
          brand="Ford"
          model="GT40"
        />
</div>
</div>
<hr className="hr"></hr>
<footer>
  <Footer/>
</footer>
</div>
);
}
export default App;

