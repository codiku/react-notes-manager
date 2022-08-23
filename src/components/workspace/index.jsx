export function Workspace(props) {
  return (
    <div
      className="container"
      style={{
        height: "100%",
        padding: 25,
      }}
    >
      <div
        style={{
          padding: 50,
          backgroundColor: "white",
          borderRadius: 22,
          height: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
