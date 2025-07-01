import Layout from "components/Layout";
import { VideoProvider } from "contexts/videoContext";
import Favorites from "pages/Favorites";
import { Home } from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VideoProvider>
  );
}
