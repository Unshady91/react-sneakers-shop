import "./css/style.scss";
import { Header } from './components/header.jsx';
import { Banner } from './components/banner.jsx';
import { Content } from './components/content.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
    </div>
  );
}

export default App;
