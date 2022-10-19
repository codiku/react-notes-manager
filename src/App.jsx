import { Header } from "./components/header";
import { Outlet } from "react-router-dom";
import logo from "./assets/images/logo.png";
import s from "./style.module.css";
export function App() {
  return (
    <div className={s.container}>
      <Header logo={logo} text="Notomatic" />
      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}
