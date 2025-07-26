import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Gallery from "../pages/gallery";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
