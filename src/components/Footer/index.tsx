import style from "./style.module.scss"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        LEGO, the LEGO logo and the Brick and Knob configurations are trademarks
        of the LEGO Group. ©2022 The LEGO Group.
      </p>
    </footer>
  );
}
