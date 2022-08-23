import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
import { NoteAPI } from "../../api/note";

export function NoteCreate(props) {
  return (
    <Workspace>
      <NoteForm
        title="New note"
        buttonText="Save note"
        onSubmit={(formValues) => NoteAPI.create(formValues)}
      />
    </Workspace>
  );
}
