import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/components/Main";
import P404 from "../src/components/P404";
import ApplicationForm from "../src/components/ApplicationForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/job/:id"} element={<ApplicationForm />} />
        <Route exact path={"/"} element={<Main />} />
        <Route exact path={"*"} element={<P404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
