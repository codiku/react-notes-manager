import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
export function NoteCreate(props) {
  return (
    <Workspace>
      <NoteForm
        title="New note"
        buttonText="Save note"
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      />
    </Workspace>
  );
}
