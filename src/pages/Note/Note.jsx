import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  const [searchParams] = useSearchParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );
  return <>{searchParams.get("truc")}</>;
}
