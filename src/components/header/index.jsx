import { ButtonPrimary } from "../button-primary";
import { Logo } from "../logo";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
export function Header({ logo }) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.main_container}`}>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <Logo image={logo} text="Notomatic" onClick={() => navigate("/")} />
        <span className={s.subtitle}>Manage your notes</span>
      </div>
      <div className={`col-xs-12 col-sm-8 col-md-8 col-lg-8 ${s.button}`}>
        <ButtonPrimary onClick={() => navigate("note/create")}>
          New note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
