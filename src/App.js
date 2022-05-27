import "./App.css";
import User from "./components/User";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Dep from "./components/Dep";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route
          exact
          path="/dep"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Dep />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
