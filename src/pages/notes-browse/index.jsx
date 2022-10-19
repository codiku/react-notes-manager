import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteNoteByIdMutation,
  useFetchAllNotesQuery,
} from "store/api/note-api";

import { SearchBar } from "../../components/search-bar";
import { TextCard } from "../../components/text-card";
import s from "./style.module.css";
import { useState } from "react";

export function NotesBrowse(props) {
  const navigate = useNavigate();
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

  const { data: noteList = [] } = useFetchAllNotesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteNoteById] = useDeleteNoteByIdMutation();

  const filteredNoteList =
    currentSearchTerm !== ""
      ? noteList.filter(
        (note) =>
          note.title.toLowerCase().includes(currentSearchTerm) ||
          note.content.toLowerCase().includes(currentSearchTerm)
      )
      : noteList;

  const confirmRemoveNote = (note) => {
    if (window.confirm("Delete this note ?" + note.id)) {
      deleteNoteById(note.id);
    }
  };

  return (
    <>
      <div className={`row justify-content-center`}>
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


        <div className={`row justify-content-center ${s.cards_container}`}>

          {noteList.length === 0 && <span className={s.no_note}>You don't have any note, you could <Link to="/note/create"> create one</Link></span>}

          {
            filteredNoteList.map((note) => (
              <div key={note.id} className={s.card_container}>
                <TextCard
                  title={note.title}
                  subtitle={note.date}
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

    </>
  );
}
