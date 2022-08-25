import { Header } from "./components/header";
import { NoteAPI } from "./api/note";
import { Outlet } from "react-router-dom";
import logo from "./assets/images/logo.png";
import s from "./style.module.css";
import { setNoteList } from "./store/note-slice";
import useAsyncEffect from "use-async-effect";
import { useDispatch } from "react-redux";
export function App() {
  const dispatch = useDispatch();

  useAsyncEffect(async () => {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }, []);
  
  return (
    <div className={s.container}>
      <Header logo={logo} text="Notomatic" />
      <Outlet />
    </div>
  );
}
