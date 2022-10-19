import { NoteForm } from "../../components/note-form";
import { NoteAPI } from "../../api/note";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/note-slice";
export function NoteCreate(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <NoteForm
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
