import logo from './logo.svg';
import './App.css';
import MyPage from './Components/MyPage';
import MyPageContext from './Components/MyPageContext';
import CrudApi from './Components/CrudApi';


function App() {
  return (
    <div>
      <h1>React Context</h1>
              <a
                href="https://es.reactjs.org/docs/context.html"
                target="_blank"
                rel="noreferrer"
              >
                Documentación
              </a>
              <hr/>
              <CrudApi/>
            <hr/>
            <MyPageContext/>
          <hr />
          <MyPage/>
          
    </div>
  );
}

export default App;
