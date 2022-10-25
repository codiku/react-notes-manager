import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
export function NoteList() {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigate = useNavigate();
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.date}
            content={note.content}
            onClickTrash={() => alert("onClickTrash()")}
            onClickCard={() => navigate("note/" + note.id)}
          />
        </div>
      ))}
    </div>
  );
}
