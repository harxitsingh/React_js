import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  let Fooditems = ['dal','sabji' ,'roti','soup'];

  return (
    <>
      <h1>Healthy Food</h1>

      <ul className="list-group">
        {Fooditems.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
