import { ButtonPrimary } from "../../components/button-primary";
import { useState } from "react";
export function NoteForm({
  onSubmit,
  title,
  buttonText,
  defaultValue,
  isReadOnly,
}) {
  const [formValues, setFormValues] = useState({
    title: defaultValue?.title ?? "",
    content: defaultValue?.content ?? "",
  });
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
        <h2 className="mb-3">{defaultValue?.title ?? title}</h2>
        <div className="mb-3" style={{ maxWidth: 300 }}>
          {!isReadOnly && (
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
          )}
        </div>
        <div className="mb-3">
          {isReadOnly ? (
            <p>{formValues.content}</p>
          ) : (
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
          )}
        </div>
      </div>

      <div style={{ alignSelf: "end" }}>
        <ButtonPrimary onClick={() => onSubmit(formValues)}>
          {buttonText}
        </ButtonPrimary>
      </div>
    </div>
  );
}
