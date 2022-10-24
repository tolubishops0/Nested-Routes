import React from "react";
import { Routes, Route } from "react-router-dom";
// import ErrorBoundary from "react-error-boundary";
import "./styles.css";
import NavBar from "./NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import User from "./components/User";
import PageNotFound from "./components/PageNotFound";

// import FallbackError from "./components/FallbackError";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        {/* <ErrorBoundary FallbackComponent={<FallbackError />}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route exact path="/User" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </ErrorBoundary> */}
      </div>
    </div>
  );
}
