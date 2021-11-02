import "./App.css";
import CrudApp from "./Components/CrudApp";
import CrudTable from './Components/CrudTable'
import CrudApi from "./Components/CrudApi"

function App() {
  return (
    <>
      <h1>Ejercicios con React </h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
