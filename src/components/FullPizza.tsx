import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type ValueType = {
  imageUrl: string;
  title: string;
  price: number;
};

export const FullPizza: React.FC = () => {
  const [value, setValue] = React.useState<ValueType>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6ecb02a0c4ef18fe.mokky.dev/sushi/${id}`
        );
        setValue(data);
      } catch (error) {
        alert("Не удалось получить суши. Переход на главную");
        navigate("/");
      }
    })();
  }, []);

  if (!value) {
    return (
      <>
        <div
          className="container"
          style={{ textAlign: "center", fontSize: "26px" }}
        >
          Загрузка...
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "250px" }} src={value.imageUrl} alt="Pizza Img" />
        <p>{value.title}</p>
        <p>{value.price}</p>
      </div>
    </div>
  );
};

export default FullPizza;
