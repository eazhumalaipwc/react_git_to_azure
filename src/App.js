import { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from '@mui/material';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://testapp7184-sandbox.mxapps.io/rest/myservicecases/v1/GetAllCase`)
     .then((response) => response.json())
     .then((actualData) => {
      setData(actualData);
      console.log(actualData);
    });
   }, []);

  return (
    <div className="App">
      <h1>Welcome to React App </h1>
      <ol class="list-group">
        {data &&
          data.map(({ id, CaseId, CaseName }) => (
            <li  key={id}>
              <h3 class="list-group-item">{CaseId +'  '+CaseName}</h3>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
