import React from "react";

export default function SushiBlock({
  title,
  composition,
  imageUrl,
  sizes,
  types,
  price,
  id,
}) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typesName = ["холодный", "горячий"];

  return (
    <>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Sushi" />
        <div className="sushi-list__item">
          <h4 className="pizza-block__title">{title}</h4>
          {composition.map((item, index) => {
            return (
              <span key={index}>
                {index === composition.length - 1 ? `${item}` : `${item}, `}
              </span>
            );
          })}
        </div>

        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => {
              return (
                <li
                  key={type}
                  onClick={() => setActiveType(index)}
                  className={activeType === index ? "active" : ""}
                >
                  {typesName[type]}
                </li>
              );
            })}
          </ul>

          <p>Толщина риса:</p>
          <ul>
            {sizes.map((size, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? "active" : ""}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button className="button button--outline button--add">
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </>
  );
}
