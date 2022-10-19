import { PencilFill, TrashFill } from "react-bootstrap-icons";

import { ButtonPrimary } from "../../components/button-primary";
import { FieldError } from "../field-error";
import s from "./style.module.css";
import { useState } from "react";

export const NOTE_FORM_VALIDATORS = {
  title: (newTitle) => {
    if (newTitle?.length < 3) {
      return "The title must be at least 3 characters long";
    } else if (newTitle?.length > 20) {
      return "The title can't exceed 20 characters";
    }
    return null;
  },
  content: (newContent) => {
    if (newContent?.length < 3) {
      return "The content must be at least 3 characters long";
    }
    return null;
  },
};


export function NoteForm({
  onSubmit,
  title,
  buttonText,
  defaultValue,
  onClickEdit,
  onClickDelete,
  isEditable
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
          <PencilFill
            className={s.icon}
            onClick={onClickEdit}
          />
        </div>
      )}
      {onClickDelete && (
        <div className="col-1">
          <TrashFill className={s.icon} onClick={onClickDelete} />
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
    applyFieldError(e)
  }

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
      />
      <FieldError msg={formErrors.content} />
    </>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
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
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">
            {defaultValue?.title && !isEditable ? defaultValue?.title : title}
          </h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{formValues.content}</pre>}
      </div>

      {isEditable && onSubmit && submitBtn}
    </div>
  );
}