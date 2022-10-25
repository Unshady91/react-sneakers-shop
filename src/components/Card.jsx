import React from "react";
import { ReactComponent as Favorite } from "../img/icons/favorite.svg";
import { ReactComponent as Unfavorite } from "../img/icons/unfavorite.svg";
import { ReactComponent as Plus } from "../img/icons/cartAdded.svg";
import { ReactComponent as Minus } from "../img/icons/cartNotAdded.svg";

function Card({ id, title, price, imgUrl, onAddtoCart }) {
  const [isFavorite, setFavorite] = React.useState(false);
  const [isAdded, setAdded] = React.useState(false);
  const CardContext = React.createContext();

  const cartAddedClickHandler = () => { //button listener
    setAdded(!isAdded);

    if (!isAdded) {
      onAddtoCart({ id, title, price, imgUrl });
    }
  };

  const favoriteClickHandler = () => {
    setFavorite(!isFavorite);
  };

  return (
    <CardContext.Provider value={isAdded}>
      <li className="cards__item">
        <div className="card">
          <div className="card__content">
            <div className="card__top">
              <img
                src={require(`../img/${imgUrl}`)}
                alt="Слот"
                className="card__img"
                width="133"
                height="112"
              />
              <span
                className="card-likes"
                onClick={favoriteClickHandler}
              >
                {isFavorite ? (
                  <Favorite className="svg card-likes__svg" />
                ) : (
                  <Unfavorite className="svg card-likes__svg" />
                )}
              </span>
            </div>
            <p className="text card__text card__text--description">{title}</p>
            <div className="card-price card-price__grid">
              <p className="text price-tag price-tag__grid-item">Цена:</p>
              <p className="text price price__grid-item">{price} руб.</p>
              <span className="card-price__button" onClick={cartAddedClickHandler}>
                {isAdded ? (
                  <Plus className="card-price__svg" />
                ) : (
                  <Minus className="card-price__svg" />
                )}
              </span>
            </div>
          </div>
        </div>
      </li>
    </CardContext.Provider>
  );
}

export { Card };
