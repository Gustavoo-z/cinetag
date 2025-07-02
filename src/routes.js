import Layout from "pages/Layout";
import Favorites from "pages/Favorites";
import { Home } from "pages/Home";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
