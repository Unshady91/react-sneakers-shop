import { CartItem } from "./CartItem";

function Cart(props) {
  return (
    <div className="overlay">
      <div className="menu-cart">
        <div className="inner">
          <div className="menu-cart__top">
            <h1 className="menu-cart__title">Ваша корзина</h1>
            <button
              className="button menu-cart__button"
              type="button"
              onClick={props.cartToggler}
            />
          </div>
          <ul className="list menu-cart__list">
            {
            props.items.map((item, index) => <CartItem {...item} key={index} />)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Cart };
