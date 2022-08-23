export function FieldError({ msg }) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "0.25rem",
        fontSize: ".875em",
        color: "#dc3545",
      }}
    >
      {msg}
    </div>
  );
}
