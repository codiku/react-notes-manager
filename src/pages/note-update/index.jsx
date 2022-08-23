import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../../store/note-slice";
import { NoteAPI } from "../../api/note";
export function NoteUpdate(props) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const currentNote = useSelector((store) => {
    return store.noteSlice.noteList.find((note) => note.id === noteId);
  });

  const confirmUpdateNote = async (formValues) => {
    if (window.confirm("Update this note ?")) {
      const updatedNote = await NoteAPI.updateById(currentNote.id, formValues);
      dispatch(updateNote(updatedNote));
      navigate("note/" + currentNote.id);
    }
  };

  return (
    <Workspace>
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
    </Workspace>
  );
}
