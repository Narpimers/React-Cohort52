import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home-page.jsx";
import ProductDetails from "./ProductDetails.jsx";

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