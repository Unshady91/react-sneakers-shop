function Header() {
  return (
    <header className="header container">
      <div className="header__col1">
        <div className="page-logo">
          <svg className="svg page-logo__svg" />
        </div>
        <div className="page-title">
          <h1 className="title page-title__title">React Sneakers</h1>
          <p className="text page-title__text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__col2">
        <div className="cart cart__content">
          <svg className="svg cart__svg" />
          <p className="text cart__text">
            <span className="text cart__price">1205&nbsp;</span>руб.
          </p>
        </div>
        <div className="likes likes__content">
          <svg className="svg likes__svg" />
        </div>
        <div className="login login__content">
          <svg className="svg login__svg" />
        </div>
      </div>
    </header>
  );
}

export { Header };
