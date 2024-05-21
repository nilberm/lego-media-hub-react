import style from "./style.module.scss";
import logoImg from "../../assets/imgs/logo/brand-logo.png";
import { IconMenu } from "../Icons/IconMenu";
import { IconSearch } from "../Icons/IconSearch";
import { IconRequest } from "../Icons/IconRequest";
import { useState } from "react";
import { IconCLose } from "../Icons/IconClose";

import { IconMessage } from "../Icons/IconMessage";

import { IconMenuHover } from "../Icons/IconMenuHover";
import { ThemeList } from "./ThemeList";

interface HeaderProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
}
export default function Header({toggleMenu, setToggleMenu}: HeaderProps) {
  const [isHoveredMenu, setIsHoveredMenu] = useState(false);

  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.logo}>
          <img src={logoImg} alt="brand logo" />
        </div>

        <div className={style.buttons}>
          <div className={style.toogleBtn}>
            {!toggleMenu ? (
              <button
                type="button"
                onClick={() => setToggleMenu(!toggleMenu)}
                onMouseEnter={() => setIsHoveredMenu(true)}
                onMouseLeave={() => setIsHoveredMenu(false)}
              >
                {isHoveredMenu ? <IconMenuHover /> : <IconMenu />}
                <span>Categories</span>
              </button>
            ) : (
              <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
                <IconCLose />
              </button>
            )}
          </div>

          <div className={style.themesListNav}>
            <nav>
              <ThemeList />
            </nav>
          </div>

          <div className={style.sideBtns}>
            <button type="button" className={style.contactBtn}>
              <IconMessage />
              <span>Contact us</span>
            </button>
            <button type="button">
              <IconSearch />
              <span>Search</span>
            </button>

            <button type="button">
              <IconRequest />
              <span>Request</span>
            </button>
          </div>
        </div>
      </header>

    </>
  );
}
