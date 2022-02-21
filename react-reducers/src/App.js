import './App.css';
import Contador from './Components/Contador';
import ContadorMejorado from './Components/ContadorMejorado';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div>
      <h1> React Reducers </h1>
      <hr />
      <ShoppingCart/>
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
