import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItems, selectCartById } from "../../redux/slices/cartSlice";

type SushiProps = {
  id: number;
  price: number;
  sizes: number;
  count: number;
  title: string;
  types: string;
  imageUrl: string;
  composition: string;
};

const typesName: string[] = ["холодный", "горячий"];

const SushiBlock: React.FC<SushiProps> = ({
  title,
  composition,
  imageUrl,
  sizes,
  types,
  price,
  id,
}) => {
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const cart = useSelector(selectCartById(id));
  const dispatch = useDispatch();

  const addedSushi = cart ? cart.count : 0;

  const sushiCart = () => {
    const item = {
      id,
      price,
      title,
      imageUrl,
      sizes: activeSize,
      types: typesName[activeType],
    };
    dispatch(addItems(item));
  };

  return (
    <>
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Sushi" />
          <div className="sushi-list__item">
            <h4 className="pizza-block__title">{title}</h4>
            {composition.map((item: string, index: number) => {
              return (
                <span key={index}>
                  {index === composition.length - 1 ? `${item}` : `${item}, `}
                </span>
              );
            })}
          </div>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type: number, index: number) => {
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
            {sizes.map((size: number, index: number) => {
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
          <button
            onClick={() => sushiCart()}
            className="button button--outline button--add"
          >
            <span>Добавить</span>
            {addedSushi > 0 ? <i>{addedSushi}</i> : ""}
          </button>
        </div>
      </div>
    </>
  );
};

export default SushiBlock;
