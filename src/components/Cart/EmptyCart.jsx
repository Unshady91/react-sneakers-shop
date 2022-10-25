function EmptyCart() {
  return (
    <div className="menu-cart__empty-box empty-box">
      <img
        className="empty-box__img"
        src={require("../../img/empty-box.png")}
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
  )
}

export { EmptyCart }