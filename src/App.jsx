import { useEffect, useState } from "react";
import "./App.css";

const baseURL = `https://jsonplaceholder.typicode.com/photos`;
//Paginated_URL https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10
const LIMIT = 10;
function App() {
  const [state, setState] = useState([]); // For Posts
  const [page, setPage] = useState(1); 
  const [value, setValue] = useState(null);

  const fetchData = async (page, LIMIT, value) => {
    let url = `${baseURL}?_page=${page}&_limit=${LIMIT}`;
    if (value) {
      url += `&q=${value}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setState(data);
  };
  useEffect(() => {
    fetchData(page, LIMIT, value);
  }, [page, value]);
  return (
    <div className="App">
      <h1>Search With Pagination</h1>
      {/* Search Bar Component */}
      <div>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Search Photos"
        />
      </div>
      {/* Pagination Component */}
      <div>
        <label htmlFor="page">Pagination</label>
        <select name="page" id="page" onChange={(e) => setPage(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      {/* UI Component */}
      <div className="PhotoComponent">
      {state.map((el) => (
        <PhotosComponent key={el.key} {...el} />
      ))}
      </div>
    </div>
  );
}

const PhotosComponent = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div key={id} className="">
      <p>Title:{title}</p>
      <p>URL:{url}</p>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default App;
