import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Routes,
  Route,
} from "react-router-dom";

import Acerca from "../Pages/Acerca";
import Contacto from "../Pages/Contacto";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";




import MenuConceptos from "./MenuConceptos";


const ConceptosBasicos = () => {
  return (
    <div>
      {/*<h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/acerca" element={<Acerca/>} />
          <Route path="/contacto" element={<Contacto/>} />
          {/*<Route path="/usuario/:username" element={Usuario} />}
          <Route  path="/productos" element={Productos} />
          <Route path="/about">
            <Redirect to="/acerca" />}
            </Route>}
            <Route  path="/contact">
              <Redirect to="/contacto" />
            </Route>
          <Route path="/react" element={ReactTopics} />
          <Route  path="/login" element={Login} />
           <Route exact path="/dashboard" element={Dashboard} /> 
          <PrivateRoute exact path="/dashboard" element={Dashboard} />
          {/* El asterisco es una especie de COMODIN, obligatorio que la ruta de error sea la ultima en cargar }
          <Route path="*" element={<Error404/>} />
        </Routes>
      </HashRouter>
      <hr />*/}
      <h2>Conceptos Básicos</h2>
      
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/acerca" element={<Acerca/>} />
          <Route  path="/contacto" element={<Contacto/>} />
          {/*<Route  path="/usuario/:username" element={Usuario} />}
          <Route  path="/productos" element={Productos} />
          <Route  path="/about">
            {/* <Redirect to="/acerca" />
             */}
          {/*</Route>}
          <Route  path="/contact">
            {/*<Redirect to="/contacto" />}
          </Route>
          <Route path="/react" element={ReactTopics} />
          <Route  path="/login" element={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/*<PrivateRoute path="/dashboard" component={Dashboard} />*/}
          <Route path="*" element={<Error404/>} />
        </Routes>
      
    </div>
  );
};

/* const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenid@s al tema de las Rutas en React</p>
          </Route>
          <Route exact path="/acerca">
            <Acerca />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              error explicabo hic sapiente facilis vel, at, ipsam ratione
              voluptates consectetur optio eum totam, repellat sit doloribus
              iure officia nihil libero!
            </p>
          </Route>
          <Route exact path="/contacto" component={Contacto} />
          <Route
            exact
            path="/contacto"
            children={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  aliquid officiis dolorum, nobis vel maxime possimus. Eos,
                  nulla cupiditate magni hic ratione aliquam, magnam dignissimos
                  rem natus quia nemo possimus.
                </p>
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}; */

export default ConceptosBasicos;