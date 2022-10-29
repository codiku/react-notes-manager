import { useDispatch, useSelector } from "react-redux";

import { NoteAPI } from 'api/note';
import { NoteForm } from "components/NoteForm/NoteForm";
import { updateNote } from "store/notes/notes-slice";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function Note(props) {
  const { noteId } = useParams();
  const dispatch = useDispatch()
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(noteId, formValues)
    dispatch(updateNote(updatedNote))
    setIsEditable(false)
  };
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickDelete={() => alert("delete")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
