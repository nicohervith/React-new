import React from "react";


//Renderiza el contenido y reacciona a los eventos de edicion y eliminacion
const CrudTableRow = ({ el, setdataToEdit, deleteData }) => {
  let { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setdataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
