import { Trash } from "react-bootstrap-icons";
import { useState } from "react";
export function TextCard({ title, text, subtitle, onClickTrash, onClickCard }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{
        cursor: "pointer",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 22,
        height: 300,
        padding: 20,
        borderColor: isCardHovered ? "#0d6efd" : "transparent",
        borderWidth: 3,
      }}
      onClick={onClickCard}
    >
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        <h6 className="card-subtitle mb-2 " style={{ color: "#b8b8b8" }}>
          {subtitle}
        </h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
