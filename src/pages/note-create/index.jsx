import { NoteAPI } from "api/note";
import { NoteForm } from "components/note-form";
import { addNote } from "store/note";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <NoteForm
      isEditable
      title="New note"
      buttonText="Save note"
      onSubmit={async (formValues) => {
        const newNote = await NoteAPI.create({
          ...formValues,
          created_at: new Date().toLocaleDateString(),
        });
        dispatch(addNote(newNote));
        alert("Note successfully created");
        navigate("/");
      }}
    />
  );
}