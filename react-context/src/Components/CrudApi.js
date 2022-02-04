import React, { useEffect, useState } from "react";
import { CrudProvider } from "../Context/CrudContext";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
 

  return (
    <>
      <CrudProvider>
        <div>
          <h2>Crud Api con Context API </h2>
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
      </CrudProvider>
    </>
  );
};

export default CrudApi;
