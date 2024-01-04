import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import BlackGold from "./Details/BlackGold";
import GreenLeaves from "./Details/GreenLeaves";
import Animal from "./Details/Animal";
import Turtle from "./Details/Turtle";
import Owl from "./Details/Owl";
import Antelopes from "./Details/Antelopes";
import Inspiriation from "./Details/Inspiriation";
import Reviews from "./Details/Reviews";
import TradeShows from "./Details/TradeShows";


function App() {
  return (
    <Router>
      <Header />
      <Routes>     
        <Route index element={<Home />} /> 
        <Route path="/works" element={<Works />} />
        <Route path="/black/:1" element={<BlackGold />} />
        <Route path="/green/:1" element={<GreenLeaves />} />
        <Route path="/animal/:1" element={<Animal />} />
        <Route path="/turtle/:1" element={<Turtle />} />
        <Route path="/owl/:1" element={<Owl />} />
        <Route path="/antelopes/:1" element={< Antelopes/>} />
        <Route path="/inspiriation/:1" element={< Inspiriation/>} />
        <Route path="/reviews/:1" element={< Reviews/>} />
        <Route path="/tradeshow/:1" element={< TradeShows/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignIn/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;