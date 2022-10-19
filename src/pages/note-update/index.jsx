import { NoteForm } from "../../components/note-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../../store/slices/note-slice";
import { NoteAPI } from "../../api/note";
import { useUpdateNoteByIdMutation } from "store/api/note-api";
import { useEffect } from "react";

export function NoteUpdate(props) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [updateNoteById, updatedNote] = useUpdateNoteByIdMutation();
  const currentNote = useSelector((store) => {
    return store.noteSlice.noteList.find((note) => note.id === noteId);
  });

  useEffect(() => {
    if (updatedNote.data) {
      alert("Note successfully");
      navigate("/note/" + currentNote.id);
    }
  }, [updateNote]);

  const confirmUpdateNote = async (formValues) => {
    if (window.confirm("Update this note ?")) {
      updateNoteById(noteId, formValues);
    }
  };

  return (
    <>
      {currentNote && (
        <NoteForm
          defaultValue={{
            title: currentNote.title,
            content: currentNote.content,
          }}
          title="Modify note"
          buttonText="Update note"
          onSubmit={confirmUpdateNote}
        />
      )}
    </>
  );
}
