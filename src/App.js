import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import HowItWorks from "./pages/HowItWorks";
import { MoonPayProvider } from "@moonpay/moonpay-react";

function App() {
  return (
    <MoonPayProvider apiKey="pk_test_uaiOAMkti6H2V1GZtNUsqlmdymFb8w" debug>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Router>
    </MoonPayProvider>
  );
}

export default App;
