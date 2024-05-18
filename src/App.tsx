import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import store from "./features";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
