import { useContext } from "react";
import { CardJsonProps } from "../../../interface/CardJsonProps";
import data from "../../../services/data.json";
import { ControlMenuContext } from "../../../context/toggleMenuContext";

export const ThemeList = () => {
  const { setIsMenuOpen } = useContext(ControlMenuContext);

  return (
    <ul>
      {data.map((item: CardJsonProps) => {
        return (
          <li key={item.id}>
            <a href={`/#${item.id}`} onClick={() => setIsMenuOpen(false)}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
