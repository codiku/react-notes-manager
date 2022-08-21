import { Logo } from "../logo";

export function Header({ logo }) {
  return (
    <div className="row">
      <div className="col-4">
        <Logo image={logo} text="Notomatic" />
        <span style={{ marginLeft: 7, whiteSpace: "nowrap" }}>
          Manage your notes
        </span>
      </div>
    </div>
  );
}
