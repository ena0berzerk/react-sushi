import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

type SortItems = {
  name: string;
  sortProperty: string;
};

type SortProps = {
  value: SortItems;
  onClickSort: (obj: SortItems) => void;
};

const sortList: SortItems[] = [
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

type PopupClick = MouseEvent & {
  path: Node[];
};

const Sort: React.FC<SortProps> = ({ value, onClickSort }) => {
  const [popup, setPopup] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  function handleSortSelected(obj: SortItems) {
    onClickSort(obj);
    setPopup(!popup);
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setPopup(false);
      }
    };

    const body = document.body;
    body.addEventListener("click", handleClickOutside);

    return () => {
      body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={sortRef} className="sort">
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
};

export default Sort;
