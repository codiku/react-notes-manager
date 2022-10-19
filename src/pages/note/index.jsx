import { removeNote, updateNote } from "store/note";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { NoteAPI } from 'api/note';
import { NoteForm } from "components/note-form";

const FORM_LABELS = {
  readonly: { title: "New note", button: "Save new note" },
  editable: { title: "Edit note", button: "Update" }
}
export function Note(props) {

  const navigate = useNavigate();
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const [formLabels, setFormLabels] = useState(FORM_LABELS.readonly)

  const currentNote = useSelector((store) => {
    return store.noteSlice.noteList.find((note) => note.id.toString() === noteId);
  });

  const [isEditable, setIsEditable] = useState(false)

  useEffect(function onClickEditNote() {
    setFormLabels(isEditable ? FORM_LABELS.editable : FORM_LABELS.readonly)
  }, [isEditable])

  const confirmRemoveNote = () => {
    if (window.confirm("Delete this note ?")) {
      NoteAPI.deleteById(currentNote.id);
      dispatch(removeNote(currentNote));
      navigate("/");
    }
  };


  function submitUpdate(formValues) {
    NoteAPI.updateById(noteId, formValues)
    dispatch(updateNote({ id: noteId, ...formValues }));
    setIsEditable(false)
  }

  return (
    <>
      {currentNote && (
        <NoteForm
          isEditable={isEditable}
          onClickDelete={confirmRemoveNote}
          onClickEdit={() => setIsEditable(!isEditable)}
          defaultValue={{
            title: currentNote.title,
            content: currentNote.content,
          }}
          title={formLabels.title}
          buttonText={formLabels.button}
          onSubmit={submitUpdate}
        />
      )}
    </>
  );
}
