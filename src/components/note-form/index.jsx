import { ButtonPrimary } from "../../components/button-primary";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { FieldError } from "../field-error";
import { NOTE_FORM_VALIDATORS } from "./constant";

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

  const [formErrors, setFormErrors] = useState({ title: null, content: null });

  const applyFieldError = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: NOTE_FORM_VALIDATORS[e.target.name](e.target.value),
    });
  };
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

  const updateFormValue = (e) => {
    setFormValues((oldFormValues) => {
      return {
        ...oldFormValues,
        [e.target.name]: e.target.value,
      };
    });
    applyFieldError(e);
  };
  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        value={formValues.title}
        className="form-control"
        onChange={updateFormValue}
      />
      <FieldError msg={formErrors.title} />
    </>
  );
  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea
        value={formValues.content}
        name="content"
        className="form-control"
        onChange={updateFormValue}
        rows="5"
      ></textarea>
      <FieldError msg={formErrors.content} />
    </>
  );

  const submitBtn = (
    <div style={{ alignSelf: "end" }}>
      <ButtonPrimary
        isDisabled={
          !formValues?.title ||
          !formValues?.content ||
          formErrors.title ||
          formErrors.content
        }
        onClick={() => onSubmit(formValues)}
      >
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
