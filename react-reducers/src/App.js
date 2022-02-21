import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';
import ContadorMejorado from './Components/ContadorMejorado';

function App() {
  return (
    <div>
      <h1> React Reducers </h1>
      <hr />
      <ContadorMejorado/>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
