import style from "./style.module.scss";
import logoImg from "../../assets/imgs/logo/brand-logo.png";
import { IconCLose } from "../Icons/IconClose";
import { IconHome } from "../Icons/IconHome";
import { IconRequest } from "../Icons/IconRequest";
import { IconMessage } from "../Icons/IconMessage";
import { ThemeList } from "../Header/ThemeList";
import { BrandsList } from "../Header/BrandsList";
import useMenuControl from "../../hooks/useMenuControl";

export default function MenuOpen() {
  const { isClosing, isMenuOpen, closeMenu } = useMenuControl();

  return (
    <nav
      className={`${style.navagationContainer} ${
        isClosing ? style.menuClose : isMenuOpen ? style.menuOpen : ""
      }`}
      aria-hidden={!isMenuOpen}
      aria-label="Main menu"
    >
      <div className={style.columnsDesktop}>
        <div className={style.column}>
          <div className={style.logoAndBtn}>
            <div className={style.logo}>
              <a href="/" aria-label="Home">
                <img src={logoImg} alt="Brand logo" />
              </a>
            </div>

            <div className={style.toogleBtn}>
              <button
                type="button"
                onClick={() => closeMenu()}
                aria-label="Close menu"
                aria-expanded={isMenuOpen}
              >
                <IconCLose />
              </button>
            </div>
          </div>
          <div className={style.mainPages}>
            <ul>
              <li>
                <a href="/" aria-label="Home page">
                  <IconHome />
                  Home
                </a>
              </li>
              <li>
                <a href="/" aria-label="Requests page">
                  <IconRequest />
                  Requests
                </a>
              </li>
              <li>
                <a href="/" aria-label="Contact us page">
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
