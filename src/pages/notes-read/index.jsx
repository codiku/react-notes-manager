import { NoteForm } from "../../components/note-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../../store/note-slice";
import { NoteAPI } from "../../api/note";

export function NoteRead(props) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const currentNote = useSelector((store) => {
    return store.noteSlice.noteList.find((note) => note.id === noteId);
  });

  const confirmRemoveNote = () => {
    if (window.confirm("Delete this note ?")) {
      NoteAPI.deleteById(currentNote.id);
      dispatch(removeNote(currentNote));
      navigate("/");
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
