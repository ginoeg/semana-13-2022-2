import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksView, PokemonsView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsView />} />
        <Route path="/books" element={<BooksView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
