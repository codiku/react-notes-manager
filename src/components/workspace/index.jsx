import s from "./style.module.css";
export function Workspace(props) {
  return (
    <div className={`container ${s.container}`}>
      <div className={s.workspace}>{props.children}</div>
    </div>
  );
}
