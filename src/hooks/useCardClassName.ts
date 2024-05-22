import style from "../components/CardsContent/Card/style.module.scss";

interface UseCardClassNameProps {
  index: number;
  isLeft: boolean;
  isSingleCard: boolean;
}

export function useCardClassName({
  index,
  isLeft,
  isSingleCard,
}: UseCardClassNameProps) {
  if (isSingleCard) {
    return isLeft ? style.leftContent : style.rightContent;
  } else {
    return index % 2 === 0 ? style.rightContent : style.leftContent;
  }
}
