import { NoteForm } from "../../components/note-form";
import { NoteAPI } from "../../api/note";

import { useNavigate } from "react-router-dom";

import { useAddNoteMutation } from "store/api/note-api";
import { useEffect } from "react";
export function NoteCreate(props) {
  const navigate = useNavigate();
  const [addNote, noteResponse] = useAddNoteMutation();

  useEffect(() => {
    if (noteResponse.data) {
      alert(`"${noteResponse.data.title}" was successfully created`);
      navigate("/");
    }
  }, [noteResponse.data]);
  return (
    <NoteForm
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
