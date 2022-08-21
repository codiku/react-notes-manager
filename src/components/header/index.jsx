import { ButtonPrimary } from "../button-primary";
import { Logo } from "../logo";

export function Header({ logo }) {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "white",
        margin: 0,
        padding: 30,
        paddingLeft: 50,
        WebkitBoxShadow: "2px 1px 4px 1px rgba(0,0,0,0.4)",
        boxShadow: "2px 1px 4px 1px rgba(0,0,0,0.4)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <Logo image={logo} text="Notomatic" />
        <span style={{ whiteSpace: "nowrap", color: "#b8b8b8" }}>
          Manage your notes
        </span>
      </div>
      <div
        className="col-xs-12 col-sm-8 col-md-8 col-lg-8"
        style={{ textAlign: "right" }}
      >
        <ButtonPrimary onClick={() => alert("todo")}>New note +</ButtonPrimary>
      </div>
    </div>
  );
}
