import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
