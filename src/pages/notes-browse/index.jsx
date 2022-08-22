import { SearchBar } from "../../components/search-bar";
import { TextCard } from "../../components/text-card";
import { useNavigate } from "react-router-dom";
export function NotesBrowse(props) {
  const navigate = useNavigate();
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
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            style={{
              width: 300,
              paddingBottom: 30,
            }}
          >
            <TextCard
              title={"Card title"}
              subtitle="Card subtitle"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              onClickTrash={(e) => {
                if (window.confirm("Delete this note ?")) {
                  //do something
                  e.stopPropagation();
                }
              }}
              onClickCard={() => navigate("note/1")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
