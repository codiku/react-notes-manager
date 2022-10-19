import { NoteForm } from "../../components/note-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../../store/slices/note-slice";
import { NoteAPI } from "../../api/note";
import {
  useDeleteNoteByIdMutation,
  useFetchNoteByIdQuery,
} from "store/api/note-api";
import { useEffect } from "react";

export function NoteRead(props) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [deleteNoteById, deletedNote] = useDeleteNoteByIdMutation();

  const { data: currentNote } = useFetchNoteByIdQuery(noteId);

  useEffect(() => {
    if (deletedNote.data) {
      alert("Note successfully deleted");
      navigate("/");
    }
  }, [deletedNote]);
  const confirmRemoveNote = () => {
    if (window.confirm("Delete this note ?")) {
      deleteNoteById(currentNote.id);
    }
  };

  return (
    <>
      {currentNote && (
        <NoteForm
          isReadOnly
          onClickDelete={confirmRemoveNote}
          onClickEdit={() => navigate("/note/update/" + currentNote.id)}
          defaultValue={{
            title: currentNote.title,
            content: currentNote.content,
          }}
          title="New note"
          buttonText="Save new note"
        />
      )}
    </>
  );
}
