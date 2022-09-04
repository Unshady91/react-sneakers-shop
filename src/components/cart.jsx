import { Card } from "./card";

function Cart() {
  return (
    <div className="overlay">
      <div className="menu-cart">
        <div className="inner">
          <h1 className="menu-cart__title">Ваша корзина</h1>
          <Card />
        </div>
      </div>
    </div>
  );
}

export { Cart };
