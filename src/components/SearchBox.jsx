import { ReactComponent as SearchIcon } from "../img/icons/search.svg";

function SearchBox(props) {
  return (
    <div className="search-box">
      <label htmlFor="search-field" />
      <SearchIcon className="svg search-box__svg" />
      <input
        onChange={props.searchClickHandler}
        className="search-box__field"
        type="search"
        name="search-field"
        id="search-field"
        placeholder="Поиск..."
      />
    </div>
  );
}

export { SearchBox }