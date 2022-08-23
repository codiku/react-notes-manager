import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onChange }) {
  return (
    <div style={{ flexDirection: "row" }}>
      <SearchIcon size={25} className={s.icon} style={{ color: "#b8b8b8" }} />

      <input
        onChange={onChange}
        className={s.input}
        type="text"
        placeholder="Search your notes..."
      />
    </div>
  );
}
