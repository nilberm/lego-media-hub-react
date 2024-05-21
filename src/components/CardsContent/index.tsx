import style from "./style.module.scss";
import data from "../../services/data.json";
import Card from "./Card";
import { CardContentProps, CardJsonProps } from "../../interface/CardJsonProps";
export default function CardsContent() {
  return (
    <section className={style.sectionContainer} id="content">
      {data.map((item: CardJsonProps, indexItem: number) => {
        return (
          <div className={style.cardContent} key={`${item.id}${indexItem}`}>
            <div
              className={style.cardHeader}
              style={{
                borderColor: item.borderColor,
              }}
            >
              <h4>{item.title}</h4>
              <span
                className={style.divider}
                style={{
                  borderColor: item.borderColor,
                }}
              ></span>
              <p>{item.subTitle}</p>
            </div>

            <div className={style.cards}>
              {item.content.map((content: CardContentProps, index: number) => {
                return (
                  <Card
                  key={`${index}`}
                    item={content}
                    index={index}
                    isLeft={indexItem % 2 === 0}
                    isSingleCard={item.content.length === 1}
                  />
                );
              })}
            </div>
            <span
              className={style.divider}
              style={{
                borderColor: item.borderColor,
              }}
            ></span>
          </div>
        );
      })}
    </section>
  );
}
