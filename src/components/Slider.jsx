const bannerSlider = require("../img/banner-slider.jpg");

function Slider() {
  return (
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
  );
}

export { Slider };