import Footer from "./Footer";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Header from "./Header";
const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname === "/product";
  const isTechPage = location.pathname === "/tech";
  return (
    <>
      <Header />
      <Outlet />
      <Footer isProductPage={isProductPage} isTechPage={isTechPage} />
    </>
  );
};

export default Layout;
