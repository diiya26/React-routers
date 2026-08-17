import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;