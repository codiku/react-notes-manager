import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
export function NoteUpdate(props) {
  return (
    <Workspace>
      <NoteForm
        defaultValue={{ title: "to update", content: "to udpdate as well" }}
        title="Modify note"
        buttonText="Update note"
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      />
    </Workspace>
  );
}
