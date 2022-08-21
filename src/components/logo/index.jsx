import s from "./style.module.css";
export function Logo({ image, text, onClick }) {
  return (
    <div
      style={{ display: "flex", width: "fit-content", cursor: "pointer" }}
      onClick={onClick}
    >
      <img style={{ height: 40 }} src={image} alt="logo" />
      <span className={s.logo_txt}>Notomatic</span>
    </div>
  );
}
