import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

export default function Sort({ value, onClickSort }) {
  const [popup, setPopup] = React.useState(false);

  const sortList = [
    {
      name: "самые популярные",
      sortProperty: "-rating",
    },
    {
      name: "менее популярные",
      sortProperty: "rating",
    },

    {
      name: "по алфавиту [А-Я]",
      sortProperty: "title",
    },
    {
      name: "по алфавиту [Я-А]",
      sortProperty: "-title",
    },
    {
      name: "цена по возрастанию",
      sortProperty: "price",
    },
    {
      name: "цена по убыванию",
      sortProperty: "-price",
    },
  ];

  function handleSortSelected(property) {
    onClickSort(property);
    setPopup(!popup);
  }

  return (
    <>
      <div className="sort">
        <div className="sort__label">
          {popup ? <GoTriangleDown /> : <GoTriangleUp />}
          <b>Сортировка по:</b>
          <span onClick={() => setPopup(!popup)}>{value.name}</span>
        </div>

        {popup && (
          <div className="sort__popup">
            <ul>
              {sortList.map((obj, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleSortSelected(obj)}
                    className={
                      value.sortProperty === obj.sortProperty ? "active" : ""
                    }
                  >
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
