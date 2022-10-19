import { NoteForm } from "../../components/note-form";
import { useAddNoteMutation } from "store/api/note-api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
  const navigate = useNavigate();
  const [addNote, noteResponse] = useAddNoteMutation();

  useEffect(() => {
    if (noteResponse.data) {
      alert(`"${noteResponse.data.title}" was successfully created`);
      navigate("/");
    }
  }, [navigate, noteResponse.data]);
  return (
    <NoteForm
      isEditable
      title="New note"
      buttonText="Save note"
      onSubmit={async (formValues) => {
        const newNote = {
          ...formValues,
          created_at: new Date().toLocaleDateString(),
        };
        addNote(newNote);
      }}
    />
  );
}
