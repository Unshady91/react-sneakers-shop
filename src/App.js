import "./css/style.scss";
import React from "react";
import { Header } from "./components/Header.jsx";
import { Banner } from "./components/Banner.jsx";
import { Cart } from "./components/Cart";
import { Card } from "./components/Card";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [fetchedData, setFetchedData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6318aa9aece2736550d0c6b4.mockapi.io/data")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setFetchedData(data);
      })
      .catch((error) => {
        console.error("Catching data error: ", error);
        setError(error);
      });
  }, []);

  if (error) {
    console.error("status:", error.status);
  }

  const cartToggler = () => setCartOpened(!cartOpened);

  const onAddtoCart = (data) => {
    setCartItems((prev) => [...prev, data]);
  };

  const searchClickHandler = (evt) => {
    setSearchValue(evt.target.value)
    fetchedData.filter(item => {
      if (item.title.includes(evt.target.value)) {
        item.map()
      }
    });
  }

  return (
    <div className="App">
      <div className="outter">
        {cartOpened ? (
          <Cart cartToggler={cartToggler} items={cartItems} />
        ) : null}
        <Header cartToggler={cartToggler} />
        <Banner />
        <section className="content">
          <h1 className="content__title">Все кроссовки</h1>
          <SearchBox searchClickHandler={searchClickHandler} />
          <ul className="list cards">
            {fetchedData.map((obj, index) => (
              <Card {...obj} key={index} onAddtoCart={onAddtoCart} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
