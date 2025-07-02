import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Container/Home-page.jsx";
import ProductDetails from "./Container/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;