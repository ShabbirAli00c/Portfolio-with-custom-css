import Image from "next/image";
import Navbar from "../app/copmponents/Navbar";
import Carsol from "./copmponents/Carsol";
import Progressor from "./copmponents/Progressor";
import ProductList from "./copmponents/ProductList";
import Banner from "./copmponents/Banner";
import MenuItems from "./copmponents/MenuItems";
import Offer from "./copmponents/Offer";
import Card from "./copmponents/Card";
import Reservation from "./copmponents/Reservation";
import Footer from "./copmponents/Footer";




export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
<Navbar/>
<Carsol/>
<Progressor/>
<ProductList/>
<Banner/>
<MenuItems/>
<Offer/>
<Card/>
<Reservation/>
<Footer/>
    </div>
  );
}
