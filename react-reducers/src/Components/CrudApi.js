import React, { useEffect, useReducer, useState } from "react";
import { crudReducer, crudInitialState } from "../Reducers/crudReducer";
import { TYPES } from "../Actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";


const CrudApi = () => {
  //const [db, setDb] = useState(null);

  const [state, dispatch] = useReducer(crudReducer, crudInitialState);

  const {db}= state;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch({type: TYPES.READ_ALL_DATA, payload: res})
          setError(null);
        } else {
          //setDb(null);
          dispatch({type: TYPES.NO_DATA})
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    //Las cabeceras no son necesarias en todas las API, en algunas me impide la funcionalidad de la api
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch({type: TYPES.CREATE_DATA, payload:res })
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);

        dispatch({type:TYPES.UPDATE_DATA,payload:data})

        
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro? '${id}' `
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
       let options = {
         headers: { "content-type": "application/json" },
       };

      api.del(endpoint,options).then((res)=>{
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
         // setDb(newData);

         dispatch({type: TYPES.DELETE.DATA, payload:id})
      } else {
        setError(res);
      }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <div>
        <h2>Crud Api</h2>
        <article className="grid-1-2">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setdataToEdit={setDataToEdit}
          />
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {db && (
            <CrudTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          )}
        </article>
      </div>
    </>
  );
};

export default CrudApi;
