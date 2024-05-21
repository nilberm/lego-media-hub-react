import style from "./style.module.scss";
import logoImg from "../../assets/imgs/logo/brand-logo.png";
import { IconCLose } from "../Icons/IconClose";
import { IconHome } from "../Icons/IconHome";
import { IconRequest } from "../Icons/IconRequest";
import { IconMessage } from "../Icons/IconMessage";
import { ThemeList } from "../Header/ThemeList";
import { BrandsList } from "../Header/BrandsList";

interface MenuOpenProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
}
export default function MenuOpen({ setToggleMenu, toggleMenu }: MenuOpenProps) {
  return (
    <nav
      className={`${style.navagationContainer} ${
        toggleMenu ? style.menuOpen : ""
      }`}
    >
      <div className={style.columnsDesktop}>
        <div className={style.column}>
          <div className={style.logoAndBtn}>
            <div className={style.logo}>
              <img src={logoImg} alt="brand logo" />
            </div>

            <div className={style.toogleBtn}>
              <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
                <IconCLose />
              </button>
            </div>
          </div>
          <div className={style.mainPages}>
            <ul>
              <li>
                <a href="/">
                  <IconHome />
                  Home
                </a>
              </li>
              <li>
                <a href="/">
                  <IconRequest />
                  Requests
                </a>
              </li>
              <li>
                <a href="/">
                  <IconMessage />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className={style.divider}>
            <span></span>
            Themes
          </div>

          <div className={style.themesList}>
            <ThemeList />
          </div>
        </div>

        <div className={style.columnGrid}>
          <div className={style.brandsList}>
            <BrandsList />
          </div>
        </div>
      </div>
    </nav>
  );
}
