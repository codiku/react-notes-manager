import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/header";
import logo from "./assets/images/logo.png";
export function App() {
  useEffect(() => {
    console.log("I run from <App/>!");
  }, []);
  return (
    <div>
      <Header logo={logo} text="Notomatic" />
      <Outlet />
    </div>
  );
}
