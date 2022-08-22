import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props) {
  const onKeyUp = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      props.onSubmit(e.target.value);
    }
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <SearchIcon size={25} className={s.icon} style={{ color: "#b8b8b8" }} />

      <input
        onKeyUp={onKeyUp}
        className={s.input}
        type="text"
        placeholder="Search a note..."
      />
    </div>
  );
}
