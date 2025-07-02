import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { verifyBanner } from "./verifyBanner";
import { VideoProvider } from "contexts/videoContext";

export default function Layout() {
  const location = useLocation();

  return (
    <VideoProvider>
      <Header banner={verifyBanner(location.pathname)} />
      <Outlet />
      <Footer />
    </VideoProvider>
  );
}
