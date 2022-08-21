import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/header";
import logo from "./assets/images/logo.png";
export function App() {
  useEffect(() => {
    console.log("I run from <App/>!");
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Header logo={logo} text="Notomatic" />
      </div>
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
}
