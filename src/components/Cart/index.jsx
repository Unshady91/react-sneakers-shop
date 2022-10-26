import { CartList } from "./CartList"
import { EmptyCart } from "./EmptyCart"

function Cart({ cartToggler, items, onCartItemRemove }) {
  return (
    <div className="overlay">
      <div className="menu-cart">
        <header className="menu-cart__header">
          <h1 className="menu-cart__title">Ваша корзина</h1>
          <button
            className="button menu-cart__button"
            type="button"
            onClick={cartToggler}
          />
        </header>
        {
          items.length === 0 ?
            <EmptyCart /> :
            <CartList items={items} onCartItemRemove={onCartItemRemove} />
        }
      </div>
    </div>
  )
}

export { Cart }
