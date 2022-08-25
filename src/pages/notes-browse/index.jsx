import { useDispatch, useSelector } from "react-redux";

import { NoteAPI } from "../../api/note";
import { SearchBar } from "../../components/search-bar";
import { TextCard } from "../../components/text-card";
import { removeNote } from "../../store/note-slice";
import s from "./style.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function NotesBrowse(props) {
  const navigate = useNavigate();
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const dispatch = useDispatch();

  const filteredNoteList =
    currentSearchTerm !== ""
      ? noteList.filter(
          (note) =>
            note.title.toLowerCase().includes(currentSearchTerm) ||
            note.content.toLowerCase().includes(currentSearchTerm)
        )
      : noteList;

  const confirmRemoveNote = (note) => {
    if (window.confirm("Delete this note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(removeNote(note));
    }
  };

  return (
    <div
      className={`row justify-content-center ${s.container}`}
     
    >
      <div className="col-sm-12 col-md-4">
        <SearchBar
          onChange={(e) =>
            setCurrentSearchTerm(e.target.value.trim().toLowerCase())
          }
        />
        {currentSearchTerm !== "" && (
          <div className={s.search_result_label}>
            {filteredNoteList.length} note(s) match the term{" "}
            <b>"{currentSearchTerm}"</b>
          </div>
        )}
      </div>

      <div className={`row justify-content-center ${s.cards_container}`} >
        {filteredNoteList.map((note) => (
          <div
            key={note.id}
            className={s.card_container}
          >
            <TextCard
              title={note.title}
              subtitle={note.created_at}
              text={note.content}
              onClickTrash={(e) => {
                e.stopPropagation();
                confirmRemoveNote(note);
              }}
              onClickCard={() => navigate("note/" + note.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
