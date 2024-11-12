// @ts-ignore: ts(6133)
import _React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dredmor } from "./pages/dredmor.tsx";
import { NoFiles } from "./pages/no_files.tsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dredmor />} />
        <Route path="/404" element={<NoFiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
