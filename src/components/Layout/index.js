import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { verifyBanner } from "./verifyBanner";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header banner={verifyBanner(location.pathname)} />
      <Outlet />
      <Footer />
    </>
  );
}
