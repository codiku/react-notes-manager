import { Trash } from "react-bootstrap-icons";
import { useState } from "react";
import s from "./style.module.css";
export function TextCard({ title, text, subtitle, onClickTrash, onClickCard }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  return (
    <div
      className={`card ${s.container}`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onClick={onClickCard}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          {isCardHovered && (
            <Trash
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
              onClick={onClickTrash}
              size={20}
              style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            />
          )}
        </div>
        <h6 className={`card-subtitle mb-2 ${s.subtitle}`}>{subtitle}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
