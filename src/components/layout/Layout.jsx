import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { NavBar } from "./Navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
