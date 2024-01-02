import React from "react";

export default function Categories({ value, onClickCategory }) {
  const categories = ["Все", "Роллы", "Сеты", "Суши", "Дополнительно"];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((categoryItem, index) => {
            return (
              <li
                key={index}
                className={value === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
              >
                {categoryItem}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
