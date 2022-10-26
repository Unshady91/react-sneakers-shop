import { UserNav } from "./User-nav"
import logo from '../img/icons/page-logo.png'

function Header(props) {
  return (
    <header className="header">
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
      <UserNav clickHandler={props.cartToggler} />
    </header>
  )
}

export { Header }
