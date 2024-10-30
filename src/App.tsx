import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Shop";
import Faqs from "./pages/Faqs";
import ScrollToTop from "./components/ui/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<About />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
      </Routes>
    </>
  );
}

export default App;
