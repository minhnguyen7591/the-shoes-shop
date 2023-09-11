import React from "react";
import css from "./card.module.scss";
import { Link } from "react-router-dom";

export type TCard = {
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  price: number;
};

type Props = {
  data: TCard;
};

export function Card(props: Props) {
  const { data } = props;

  return (
    <div className={css["card"]}>
      <div className={css["content"]}>
        <img className={css["img"]} src={data.image} />

        <p className={css["title"]}>{data.name}</p>
        <p className={css["desc"]}>{data.shortDescription}</p>
      </div>

      <div className={css["action"]}>
        <Link className={css["action-buy"]} to={`/detail/${data.id}`}>
          Buy
        </Link>
        <Link className={css["action-price"]} to={`/detail/${data.id}`}>
          {data.price}$
        </Link>
      </div>
    </div>
  );
}
