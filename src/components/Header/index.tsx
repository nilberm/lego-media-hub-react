import style from "./style.module.scss";
import { ThemeList } from "./ThemeList";
import { IconMenu } from "../Icons/IconMenu";
import { IconSearch } from "../Icons/IconSearch";
import { IconRequest } from "../Icons/IconRequest";
import { IconCLose } from "../Icons/IconClose";
import { IconMessage } from "../Icons/IconMessage";
import { IconMenuHover } from "../Icons/IconMenuHover";
import useHeaderControl from "../../hooks/useHeaderControl";
import logoImg from "../../assets/imgs/logo/brand-logo.png";

export default function Header() {
  const {
    isHoveredMenu,
    isMenuOpen,
    toggleMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useHeaderControl();

  return (
    <header className={style.headerContainer}>
      <div className={style.logo}>
        <a href="/" aria-label="Home">
          <img src={logoImg} alt="Brand logo" />
        </a>
      </div>

      <div className={style.buttons}>
        <div className={style.toogleBtn}>
          {!isMenuOpen ? (
            <button
              type="button"
              onClick={toggleMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Open categories menu"
              aria-expanded={isMenuOpen}
            >
              {isHoveredMenu ? <IconMenuHover /> : <IconMenu />}
              <span>Categories</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Close categories menu"
              aria-expanded={isMenuOpen}
            >
              <IconCLose />
            </button>
          )}
        </div>

        <div className={style.themesListNav}>
          <nav aria-label="Themes">
            <ThemeList />
          </nav>
        </div>

        <div className={style.sideBtns}>
          <button
            type="button"
            className={style.contactBtn}
            aria-label="Contact us"
          >
            <IconMessage />
            <span>Contact us</span>
          </button>
          <button type="button" aria-label="Search">
            <IconSearch />
            <span>Search</span>
          </button>
          <button type="button" aria-label="Request">
            <IconRequest />
            <span>Request</span>
          </button>
        </div>
      </div>
    </header>
  );
}
