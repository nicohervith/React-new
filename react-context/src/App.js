import logo from './logo.svg';
import './App.css';
import MyPage from './Components/MyPage';
import MyPageContext from './Components/MyPageContext';

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
            <MyPageContext/>
          <hr />
          <MyPage/>
          
    </div>
  );
}

export default App;
