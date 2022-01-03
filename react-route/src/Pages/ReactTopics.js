
import {
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const Topic = () =>{
  let {topic }= useParams();

  return(
    <div>
        <h4>{topic}</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam doloremque voluptate repellendus nihil optio ipsa voluptas recusandae reiciendis. Odio, similique sapiente? Esse fugit dolorem distinctio mollitia totam eveniet consequuntur fuga!</p>
    </div>
  )
}

 const ReactTopics = () => {

  
   return (
     <div>
       <h3>Temas de React</h3>
       <ul>
         <li>
           <Link to="jsx">JSX</Link>
         </li>
         <li>
           <Link to="props">Props</Link>
         </li>
         <li>
           <Link to="estado">Estado</Link>
         </li>
         <li>
           <Link to="componente">Componente</Link>
         </li>
       </ul>
       <Routes>
         <Route path=":topic" element={<Topic />} />
         
       </Routes>
     </div>
   );
}

export default ReactTopics;