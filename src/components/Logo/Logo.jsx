import s from "./style.module.css";
export function Logo({ image, onClick }) {
  return (
    <div className={s.container} onClick={onClick}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.logo_txt}>Notomatic</span>
    </div>
  );
}
