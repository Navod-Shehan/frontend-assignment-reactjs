import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components for different pages
import Listview from "./components/Listview/Listview";
import Detailsview from "./components/Detailsview/Detailsview";
import Formview from "./components/Formview/Formview";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Listview />} />
          <Route path="/formview" element={<Formview />} />
          <Route path="/detailsview" element={<Detailsview />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router></>

  );
}

export default App;