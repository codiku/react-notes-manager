import { ButtonPrimary } from "../../components/button-primary";
import { Workspace } from "../../components/workspace";
import { Header } from "../../components/header";
import logo from "../../assets/images/logo.png";
export function NoteCreate(props) {
  return (
    <Workspace>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Content
            </label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>
        <div>
          <ButtonPrimary>Confirm</ButtonPrimary>
        </div>
      </div>
    </Workspace>
  );
}
