import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import logo from "./assets/images/logo.png";
import { useDispatch } from "react-redux";
import { NoteAPI } from "./api/note";
import useAsyncEffect from "use-async-effect";
import { setNoteList } from "./store/note-slice";
export function App() {
  const dispatch = useDispatch();

  useAsyncEffect(async () => {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100%",
      }}
    >
      <Header logo={logo} text="Notomatic" />
      <Outlet />
    </div>
  );
}
