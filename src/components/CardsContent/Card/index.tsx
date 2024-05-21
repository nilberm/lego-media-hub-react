import { CardContentProps } from "../../../interface/CardJsonProps";
import { IconArrow } from "../../Icons/IconArrow";
import style from "./style.module.scss";

interface CardProps {
  item: CardContentProps;
  index: number;
  isLeft: boolean;
  isSingleCard: boolean;
}
export default function Card({ item, index, isLeft, isSingleCard }: CardProps) {
  return (
    <div className={style.cardContent}>
      <div
        className={`${
          !isSingleCard && index % 2 === 0
            ? style.rightContent
            : !isSingleCard && index % 2 !== 0
            ? style.leftContent
            : isSingleCard && !isLeft
            ? style.leftContent
            : style.rightContent
        }`}
        
      >
        <div className={style.textContent}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <button type="button">
            <a href="/">View details</a>
            <IconArrow />
          </button>
        </div>
        <img src={item.image} alt="lego" />
      </div>
    </div>
  );
}
