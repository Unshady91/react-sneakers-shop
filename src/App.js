import "./css/style.scss";
import React from 'react';
import {Header} from './components/header.jsx';
import {Banner} from './components/banner.jsx';
import {Content} from './components/content.jsx';
import {Cart} from './components/cart';


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="App">
      {cartOpened ? <Cart /> : null}
      <Header setCartOpened={setCartOpened} />
      <Banner />
      <Content />
    </div>
  );
}

export default App;
