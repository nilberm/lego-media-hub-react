import { useCardClassName } from "../../../hooks/useCardClassName";
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
  const contentClassName = useCardClassName({ index, isLeft, isSingleCard });

  return (
    <div className={style.cardContent}>
      <div className={contentClassName}>
        <div className={style.textContent}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <button type="button">
            <a href="/">View details</a>
            <IconArrow aria-hidden="true" />
          </button>
        </div>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
}
