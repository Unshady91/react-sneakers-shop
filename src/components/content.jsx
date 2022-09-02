import { Cards } from "../components/cards.jsx";

function Content() {
  return (
    <section className="content container">
      <h1 className="content__title">Все кроссовки</h1>
      <Cards />
    </section>
  );
}

export { Content };