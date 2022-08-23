import { ButtonPrimary } from "../../components/button-primary";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";

export function NoteForm({
  onSubmit,
  title,
  buttonText,
  defaultValue,
  isReadOnly,
  onClickEdit,
  onClickDelete,
}) {
  const [formValues, setFormValues] = useState({
    title: defaultValue?.title ?? "",
    content: defaultValue?.content ?? "",
  });

  const actionIcons = (
    <>
      {onClickEdit && (
        <div className="col-1">
          <PencilFill style={{ cursor: "pointer" }} onClick={onClickEdit} />
        </div>
      )}
      {onClickDelete && (
        <div className="col-1">
          <TrashFill style={{ cursor: "pointer" }} onClick={onClickDelete} />
        </div>
      )}
    </>
  );

  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input
        type="text"
        value={formValues.title}
        className="form-control"
        onChange={(e) =>
          setFormValues((oldFormValues) => {
            return {
              ...oldFormValues,
              title: e.target.value,
            };
          })
        }
      />
    </>
  );
  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea
        value={formValues.content}
        onChange={(e) =>
          setFormValues((oldFormValues) => {
            return {
              ...oldFormValues,
              content: e.target.value,
            };
          })
        }
        className="form-control"
        rows="5"
      ></textarea>
    </>
  );

  const submitBtn = (
    <div style={{ alignSelf: "end" }}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>
        {buttonText}
      </ButtonPrimary>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <div className="row justify-content-space-between">
          <div className="col-10">
            <h2 className="mb-3">
              {defaultValue?.title && isReadOnly ? defaultValue?.title : title}
            </h2>
          </div>
          {actionIcons}
        </div>
        <div className="mb-3" style={{ maxWidth: 300 }}>
          {!isReadOnly && titleInput}
        </div>
        <div className="mb-3">
          {isReadOnly ? <p>{formValues.content}</p> : contentInput}
        </div>
      </div>

      {onSubmit && submitBtn}
    </div>
  );
}
