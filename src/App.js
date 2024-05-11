import './App.css';
import ItemCard from './Component/ItemCard/ItemCard';
import Navbar from './Component/Navbar/Navbar';
import Searchbar from './Component/Searchbar/Searchbar';
import Home from './Pages/Home/Home';
import SearchItem from './Pages/SearchItem/SearchItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:key" element={<SearchItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
