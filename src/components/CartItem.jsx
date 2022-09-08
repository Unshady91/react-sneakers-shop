function CartItem({ title, price, imgUrl }) {
  return (
    <li className="item menu-cart__item">
      <div className="cart-item">
        <img
          src={require(`../img/1.jpg`)}
          alt="Кроссовки"
          className="cart-item__img"
        />
        <div className="cart-item__description">
          <p className="text cart-item__text">
            Мужские Кроссовки Nike Air Max 270
          </p>
          <p className="text cart-item__price">12 999 руб.</p>
        </div>
        <button className="button cart-item__button" type="button" />
      </div>
    </li>
  );
}

export { CartItem };
