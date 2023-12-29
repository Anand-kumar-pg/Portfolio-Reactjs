import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Detail from "./components/Detail";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import SecondDetail from "./components/SecondDetail";
import ThirdDetail from "./components/ThirdDetail";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>     
        <Route index element={<Home />} /> 
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignIn/>} />
        <Route path="/detail/2" element={<SecondDetail/>} />
        <Route path="/detail/3" element={<ThirdDetail/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;