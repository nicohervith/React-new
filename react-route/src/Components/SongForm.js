import React, { useState } from 'react';

const initialForm = {
  artist:"",
  song:"",
}

const SongForm = ({handleSearch}) => {
  const [form,setForm] = useState(initialForm);

//La funcion handleChange toma una copia del objeto formulario ( ...form  )
//e.target.name es el objeto que toma el evento y lo hago dinamico con los corchetes
const handleChange = (e) =>{
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!form.artist || !form.song){
    alert("Datos incompletos");
    return;
  }

  handleSearch(form);
  setForm(initialForm);

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="artist" placeholder="Nombre del intérprete"  
        onChange={handleChange} value={form.artist} />
        <input type="text" name="song" placeholder="Nombre de la canción" 
        onChange={handleChange} value={form.song}/>
        <input type="submit" value="enviar"/>
      </form>
    </div>
  );
};

export default SongForm;
