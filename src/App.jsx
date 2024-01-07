import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Sidebar />
        <Footer />
      </main>
    </>
  );
}

export default App;
