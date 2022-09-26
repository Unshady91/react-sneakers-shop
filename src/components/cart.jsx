import { CartItem } from "./CartItem";

function Cart(props) {
  return (
    <div className="overlay">
      <div className="menu-cart">
        <header className="menu-cart__header">
          <h1 className="menu-cart__title">Ваша корзина</h1>
          <button
            className="button menu-cart__button"
            type="button"
            onClick={props.cartToggler}
          />
        </header>
        {props.items.length === 0 ? (
          <div className="menu-cart__empty-box empty-box">
            <img
              className="empty-box__img"
              src={require("../img/empty-box.png")}
              alt="Пустой ящик"
            />
            <p className="empty-box__text empty-box__text--bold">
              Корзина пустая
            </p>
            <p className="empty-box__text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className="empty-box__button">Вернуться назад</button>
          </div>
        ) : (
          <>
            <ul className="list menu-cart__list">
              {props.items.map((item, index) => (
                <CartItem {...item} key={index} />
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
        )}
      </div>
    </div>
  );
}

export { Cart };
