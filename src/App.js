import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
     .then((response) => response.json())
     .then((actualData) => {
      setData(actualData);
    });
   }, []);

  return (
    <div className="App">
      <h1>Welcome to React App fourth commit</h1>
      <ol>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
