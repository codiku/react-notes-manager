import { Outlet } from "react-router-dom";
import { SearchBar } from "../../components/search-bar";
import { TextCard } from "../../components/text-card";

export function NotesBrowse(props) {
  return (
    <div>
      <div className="row justify-content-center p-5">
        <div className="col-sm-12 col-md-5">
          <SearchBar
            onSubmit={(searchTerm) => {
              alert(searchTerm);
            }}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            style={{
              width: 300,
              marginBottom: 30,
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
              onClickCard={() => alert("hey")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
