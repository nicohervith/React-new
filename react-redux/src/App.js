import { Provider } from 'react-redux';
import Contador from './components/Contador';
import TeoriaRedux from './components/TeoriaRedux';
import store from './store';

function App() {
  return (
    //El provider me permite que la app lea el estado global a traves de redux
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr/>
        <Contador/>
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
