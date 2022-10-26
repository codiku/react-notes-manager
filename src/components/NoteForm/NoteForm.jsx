import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";

export function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };
  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && <TrashFill className={s.icon} />}
      </div>
    </>
  );
  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
      />
    </>
  );
  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
      />
    </>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
