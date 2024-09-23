import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import History from "./pages/History";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import React from "react";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/history" element={<History />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
};

export default App;
