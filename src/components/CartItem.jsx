function CartItem({index, title, price, imgUrl, cartItemRemoveHandler }) {
  return (
    <li className="item menu-cart__item">
      <div className="cart-item">
        <img
          src={require(`../img/${imgUrl}`)}
          alt="Кроссовки"
          className="cart-item__img"
        />
        <div className="cart-item__description">
          <p className="text cart-item__text">{title}</p>
          <p className="text cart-item__price">{price} руб.</p>
        </div>
        <button
          className="button cart-item__button"
          type="button"
          onClick={(evt) => cartItemRemoveHandler({index})}
        />
      </div>
    </li>
  );
}

export { CartItem };
