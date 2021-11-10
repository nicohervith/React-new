import "./App.css";
import CrudApp from "./Components/CrudApp";
import CrudTable from './Components/CrudTable'
import CrudApi from "./Components/CrudApi"
import SongSearch from "./Components/SongSearch.js"
import SelectAnidados from "./Components/SelectsAnidados";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <h1>Ejercicios con React </h1>
      <hr />
      <ContactForm/>
      <hr/>
      <SelectAnidados/>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
