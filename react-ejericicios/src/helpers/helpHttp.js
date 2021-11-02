
export const helpHttp = () =>{

  const customFetch = (endpoint, options) =>{
    const defaultHeader = {
      accept: "aplicattion/json",
    };

      const controller = new AbortController();
      options.signal =  controller.signal;

      options.method = options.method || "GET";
      options.headers = options.headers ? {...defaultHeader, ...options.headers}
       : defaultHeader

       //Si el body no existe le doy valor falso y con el if lo elimino
       options.body = JSON.stringify(options.body) || false;
       if(!options.body) delete options.body;

       console.log(options);
 
       //Si no recibo respuesta del servidor a la peticion, aborto
       setTimeout(() => controller.abort(), 3000);

       return fetch(endpoint, options)
         .then((res) =>
           res.ok
             ? res.json()
             : Promise.reject({
                 err: true,
                 status: res.status || "00",
                 statusText: res.statusText || "Ocurrió un error",
               })
         )
         .catch((err) => err);
  }

 //si el usuario no manda opciones el objeto es vacio
  const get= (url,options = {}) => customFetch(url,options);

   const post = (url,options = {}) => {
     options.method = "POST";
     return customFetch(url,options);
   };

    const put = (url,options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };

      const del= (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
      };

     return{
       get,
       post,
       put,
       del,
     }

}