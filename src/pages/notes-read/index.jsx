import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
import { useNavigate, useParams } from "react-router-dom";
import useAsyncEffect from "use-async-effect";
import { useSelector, useDispatch } from "react-redux";
import { NoteAPI } from "../../api/note";
import { useState } from "react";
import { removeNote } from "../../store/note-slice";

export function NoteRead(props) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const currentNote = useSelector((store) => {
    return store.noteSlice.noteList.find((note) => note.id === noteId);
  });

  return (
    <Workspace>
      {currentNote && (
        <NoteForm
          isReadOnly
          onClickDelete={() => dispatch(removeNote(currentNote))}
          onClickEdit={() => navigate("/note/update/" + currentNote.id)}
          defaultValue={{
            title: currentNote.title,
            content: currentNote.content,
          }}
          title="New note"
          buttonText="Save new note"
        />
      )}
    </Workspace>
  );
}
