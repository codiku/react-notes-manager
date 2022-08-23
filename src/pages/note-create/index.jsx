import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
import { NoteAPI } from "../../api/note";

import { useNavigate } from "react-router-dom";
export function NoteCreate(props) {
  const navigate = useNavigate();
  return (
    <Workspace>
      <NoteForm
        title="New note"
        buttonText="Save note"
        onSubmit={(formValues) => {
          NoteAPI.create(formValues);
          alert("Note successfully created");
          navigate("/");
        }}
      />
    </Workspace>
  );
}
