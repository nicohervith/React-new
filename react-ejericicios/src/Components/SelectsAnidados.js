import React, { useState } from 'react';

import SelectList from './SelectList';


const SelectAnidados =() =>{

  const [state,setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
 
  return (
    <div>
      <h2>Select Anidados </h2>
      <h3> Argentina </h3>
      <SelectList
        title="Estado"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="Provincia"
          url=""
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="Ciudad"
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );

}

export default  SelectAnidados;