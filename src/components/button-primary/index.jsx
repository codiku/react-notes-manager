export function ButtonPrimary({ onClick, children, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type="button"
      className="btn btn-primary"
      style={{
        borderRadius: 50,
        paddingLeft: 40,
        paddingRight: 40,
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  );
}
