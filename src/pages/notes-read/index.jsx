import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
export function NoteRead(props) {
  return (
    <Workspace>
      <NoteForm
        isReadOnly
        defaultValue={{
          title: "Hello",
          content: "it's a long long story blbale azeazea",
        }}
        title="New note"
        buttonText="Save new note"
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      />
    </Workspace>
  );
}
