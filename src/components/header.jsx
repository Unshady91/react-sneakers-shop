import { UserNav } from "./user-nav";
const logo = require("../img/icons/page-logo.png");

function Header(props) {
  const openCart = () => {
    props.setCartOpened(true)
  }
  return (
    <header className="header container">
      <div className="header__col1">
        <div className="page-logo">
          <img
            className="img page-logo__img"
            src={logo}
            alt="Логотип"
            width={40}
            height={40}
          />
        </div>
        <div className="page-title">
          <h1 className="title page-title__title">React Sneakers</h1>
          <p className="text page-title__text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <UserNav openCart={openCart} />
    </header>
  );
}

export { Header };
