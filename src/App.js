import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import { PrivateRoute, LoginRoute } from "./constant/PrivateRoute";
import { Dashboard, Login } from "./pages";
import { Register } from "containers";

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/login" element={<LoginRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div>page not found</div>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
