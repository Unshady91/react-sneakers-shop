import { Order } from "./Order"
import { Slider } from "./Slider"
const logo = require("../img/banner-logo.png")

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__col1">
          <div className="banner-logo">
            <img
              className="banner-logo__img"
              src={logo}
              alt="Картинка"
              width="100"
              height="40"
            />
          </div>
          <Order />
        </div>
        <Slider />
      </div>
    </section>
  )
}

export { Banner }
