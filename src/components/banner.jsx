const logo = require("../img/banner-logo.png");
const bannerSlider = require("../img/banner-slider.jpg");

function Banner() {
  return (
    <section className="banner container">
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
          <div className="order">
            <h2 className="order__title">
              <span className="order__quote">Stan Smith</span>, Forever!
            </h2>
            <a href="#order" className="link order__link">
              Купить
            </a>
          </div>
        </div>
        <div className="banner__col2 banner-slider">
          <img
            src={bannerSlider}
            alt="Лягушка с крышкой в руке"
            className="banner-slider__img"
            width="641"
            height="300"
          />
          <span className="slide banner-slider__slide"></span>
        </div>
      </div>
    </section>
  );
}

export { Banner };
