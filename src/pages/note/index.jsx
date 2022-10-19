import {
  useDeleteNoteByIdMutation,
  useFetchNoteByIdQuery,
  useUpdateNoteByIdMutation
} from "store/api/note-api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { NoteForm } from "components/note-form";

const FORM_LABELS = {
  readonly: { title: "New note", button: "Save new note" },
  editable: { title: "Edit note", button: "Update" }
}
export function Note(props) {

  const navigate = useNavigate();
  const { noteId } = useParams();
  const [deleteNoteById, deletedNote] = useDeleteNoteByIdMutation();
  const [updateNoteById, updatedNote] = useUpdateNoteByIdMutation()
  const [formLabels, setFormLabels] = useState(FORM_LABELS.readonly)
  const { data: currentNote } = useFetchNoteByIdQuery(noteId);


  const [isEditable, setIsEditable] = useState(false)

  useEffect(function onDeleteNote() {
    if (deletedNote.data) {
      alert("Note successfully deleted");
      navigate("/");
    }
  }, [deletedNote, navigate]);

  useEffect(function onUpdateNote() {
    if (updatedNote.data) {
      alert("Note successfully updated");
      setIsEditable(false)
    }
  }, [updatedNote]);

  useEffect(function onClickEditNote() {
    setFormLabels(isEditable ? FORM_LABELS.editable : FORM_LABELS.readonly)
  }, [isEditable])

  const confirmRemoveNote = () => {
    if (window.confirm("Delete this note ?")) {
      deleteNoteById(currentNote.id);
    }
  };

  function submitUpdate(note) {
    console.log('***', note)
    updateNoteById({ id: noteId, ...note })
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
