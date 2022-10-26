import { NoteAPI } from 'api/note';
import { NoteForm } from "components/NoteForm/NoteForm";
import { addNote } from "store/notes/notes-slice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export function NoteCreate(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create(formValues)
    dispatch(addNote(createdNote))
    alert("The note has been created !")
    navigate("/")

  }
  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}
