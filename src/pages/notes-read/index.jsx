import { Workspace } from "../../components/workspace";
import { NoteForm } from "../../components/note-form";
import { useNavigate } from "react-router-dom";
export function NoteRead(props) {
  const navigate = useNavigate();
  return (
    <Workspace>
      <NoteForm
        isReadOnly
        onClickEdit={() => navigate("/note/update/x")}
        defaultValue={{
          title: "Hello",
          content: "it's a long long story blbale azeazea",
        }}
        title="New note"
        buttonText="Save new note"
        // onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      />
    </Workspace>
  );
}
