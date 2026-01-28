import React from "react" ;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App (){

  return (
   <React.Fragment>
                 {/* or this shortcut for  react Fragment  <>    </> */}
    <h1> Healthy Food </h1>
    <ul className = "list-group">
      <li className = "ListGroupitem"> dal</li>
      <li className = "ListGroupitem"> green veg</li>
      <li className = "ListGroupitem"> fruits</li>
      <li className = "ListGroupitem">soup </li>
      <li className = "ListGroupitem">Milk </li>
      <li className = "ListGroupitem">vegli>
            
    </ul>
  </React.Fragment>
  );
}
export default App;


--------------map===================

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


----------conditional Rendering ----------
-- Three ways - 1. if else    2. ternery     t 3.logical operators


1. if else  only i am still hungry likhega
import "bootstrap/dist/css/bootstrap.min.css"; // for better list ui - bootstrao 
function App() {
let Fooditems = ['dal','sabji' ,'roti','soup'];



if ( Fooditems.length === 0){
  return <h3>I am still hungry</h3>

}

  return (
    <>
      <h1>Healthy Food</h1>
      {}
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

// 2. ternery  // heading ke andar i am still hungry likhega 

function App() {

  let Fooditems = ['dal','sabji','roti','soup'];

    //  or let emptyMessage =
  //    Fooditems.length === 0 ? <h3> i am still hungry</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
 {/* or  {emptyMessage}  */}
      {Fooditems.length ===0 ? <h3> i am still hungry .</h3> : null}
        

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

3. logical operators 

function App() {

  let Fooditems = ['dal','sabji','roti','soup'];

  return (
    <>
      <h1>Healthy Food</h1>

      {Fooditems.length ===0 && <h3> i am still hungry .</h3>}

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

// -------props ------------
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Container from "./Components/Container";

function App() {
  let FoodItemsData = ['sabji', 'green veg', 'roti', 'salad'];

  return (
<Container>
  <h1 className="food-heading">Healthy Food</h1>

  <ErrorMessage items={FoodItemsData} />
  
  <FoodItems items={FoodItemsData} />
  

  <p>Above is the list of healthy foods...</p>
</Container>

      
  );
}

export default App;
