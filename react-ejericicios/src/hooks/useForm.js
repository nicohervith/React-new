import { useState } from 'react';



export const useForm = (initialForm,validateForm) =>{

    const [form,setForm] = useState(initialForm);
    
    //Lo inicializo como un objeto vacio ya que si no tiene ningun atributo es que todo paso bien y no hay error
    const [errors,setErrors] = useState({});
     const [loading, setLoading] = useState(false);
     const [response,setResponse] = useState(null);

     
     const handleChange= (e) => {
       const {name,value} = e.target;
      setForm({
         ...form, [name]: value
       })
     };
     
     const handleBlur = (e) =>{
       handleChange(e);
     //Actualizo la variable de estado de los errores
       setErrors(validateForm(form))

     }
     const handleSubmit = (e) => {};


     return{
       form, errors, loading, response, handleChange,handleBlur,handleSubmit

     }

}