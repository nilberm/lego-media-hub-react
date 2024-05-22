import Card from "./Card";
import style from "./style.module.scss";
import data from "../../services/data.json";
import { CardContentProps, CardJsonProps } from "../../interface/CardJsonProps";
export default function CardsContent() {
  return (
    <section className={style.sectionContainer} id="content">
      {data.map((item: CardJsonProps, indexItem: number) => {
        return (
          <article
            className={style.cardContent}
            key={`${item.id}${indexItem}`}
            id={`${item.id}`}
            aria-labelledby={`heading-${item.id}`}
          >
            <header
              className={style.cardHeader}
              style={{
                borderColor: item.borderColor,
              }}
            >
              <h4 id={`heading-${item.id}`}>{item.title}</h4>
              <span
                className={style.divider}
                style={{
                  borderColor: item.borderColor,
                }}
                aria-hidden="true"
              ></span>
              <p>{item.subTitle}</p>
            </header>

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
              aria-hidden="true"
            ></span>
          </article>
        );
      })}
    </section>
  );
}
