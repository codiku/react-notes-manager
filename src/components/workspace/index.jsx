export function Workspace(props) {
  return (
    <div
      className="container"
      style={{
        padding: 30,
        backgroundColor: "white",
        borderRadius: 22,
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
}
