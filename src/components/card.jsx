const card = require("../img/card.jpg");
import { LikeIcon } from "../img/icons/like.svg";

function Card() {
  return (
    <div className="card cards__card">
      <div className="card__content">
        <div className="card__top">
          <img
            src={card}
            alt="Слот"
            className="card__img"
            width="133"
            height="112"
          />
          <span className="card-likes card__card-likes">
            {/* <svg className="svg card-likes__svg">{}</svg> */}
            <LikeIcon />
          </span>
        </div>
        <p className="text card__text card__text--description">
          Мужские Кроссовки Nike Blazer Mid Suede
        </p>
        <div className="card-price card-price__grid">
          <p className="text card-price__text price-tag price-tag__grid-item">Цена:</p>
          <p className="text card-price__text price price__grid-item">12 999 руб.</p>
          <svg className="svg card-price__svg plus plus__grid-item"></svg>
        </div>
      </div>
    </div>
  );
}

export { Card };
