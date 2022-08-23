import { SearchBar } from "../../components/search-bar";
import { TextCard } from "../../components/text-card";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../../store/note-slice";
export function NotesBrowse(props) {
  const navigate = useNavigate();
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const dispatch = useDispatch();

  const confirmRemoveNote = (note) => {
    if (window.confirm("Delete this note ?")) {
      //do something
      dispatch(removeNote(note));
    }
  };
  return (
    <div
      className="row justify-content-center"
      style={{
        padding: 30,
        margin: 0,
      }}
    >
      <div className="col-sm-12 col-md-4">
        <SearchBar
          onSubmit={(searchTerm) => {
            alert(searchTerm);
          }}
        />
      </div>
      <div className="row justify-content-center" style={{ paddingTop: 50 }}>
        {noteList.map((note) => (
          <div
            key={note.id}
            style={{
              width: 300,
              paddingBottom: 30,
            }}
          >
            <TextCard
              title={note.title}
              subtitle="todo"
              text={note.content}
              onClickTrash={(e) => {
                e.stopPropagation();
                confirmRemoveNote(note);
              }}
              onClickCard={() => navigate("note/" + note.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
