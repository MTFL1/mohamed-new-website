import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
