import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage.jsx";
import ProductDetails from "./Container/ProductDetails.jsx";
import Favorites from "./Container/FavoritesPage.jsx";
import { FavoritesProvider } from "./Context/FavoritesContext"; // перенесён сюда

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;