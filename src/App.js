import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ErrorPage from "./pages/errorPage";
import Art from "./pages/art";
import About from "./pages/about";
import Writing from "./pages/writing";
import Design from "./pages/design";
import TopReturn from "./components/topReturn";
import JumpButton from "./components/jumpButton";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import HamburgerMenu from "./components/hamburgerMenu";


function App() {
  return (
    <>
    <Navbar/>
    <HamburgerMenu/>
    <TopReturn/>
    <JumpButton/>
    <Routes>
      <Route path="/2508051_SPA/" element={<Home/>} />
      <Route path="/2508051_SPA/art" element={<Art/>} />
      <Route path="/2508051_SPA/about" element={<About/>} />
      <Route path="/2508051_SPA/portfolio" element={<Portfolio/>} />
      <Route path="/2508051_SPA/writing" element={<Writing/>} />
      <Route path="/2508051_SPA/design" element={<Design/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
    </>
   
  );
}

export default App;
