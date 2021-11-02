import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setdataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro? '${id}' `
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
    }
    return;
  };

  return (
    <>
      <div>
        <h2>Crud App</h2>
        <article className="grid-1-2">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setdataToEdit={setdataToEdit}
          />
          <CrudTable
            data={db}
            setdataToEdit={setdataToEdit}
            deleteData={deleteData}
          />
        </article>
      </div>
    </>
  );
};

export default CrudApi;
