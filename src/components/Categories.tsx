import React from "react";

type CategoriesType = {
  value: number;
  onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesType> = React.memo(
  ({ value, onClickCategory }) => {
    const categories: string[] = [
      "Все",
      "Роллы",
      "Сеты",
      "Суши",
      "Дополнительно",
    ];

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
);
export default Categories;
