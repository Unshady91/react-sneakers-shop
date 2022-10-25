import React from 'react';
import {CartItem} from './CartItem';

function CartList({ items, onCartItemRemove }) {

  return (
    <>
      <ul className="list menu-cart__list">
        {
          items.map((item, index) => (
            <CartItem
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              key={index}
              onRemove={onCartItemRemove} />
          ))}
      </ul>
      <footer className="menu-cart__footer">
        <div className="menu-order">
          <div className="menu-order__content">
            <div className="menu-order__top">
              <p className="menu-order__text">Итого:</p>
              <p className="menu-order__text menu-order__text--bold">
                21498&nbsp;руб.
              </p>
            </div>
            <div className="menu-order__bottom">
              <p className="menu-order__text">Налог 5%:</p>
              <p className="menu-order__text menu-order__text--bold">
                1074&nbsp;руб.
              </p>
            </div>
            <button type="submit" className="menu-order__button">
              Оформить заказ
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export { CartList };
