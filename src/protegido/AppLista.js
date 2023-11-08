import AppForm from './AppForm'

import React, {useEffect, useState} from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import{db} from '../conexion/firebase';

const AppLista = (props) =>  { 

  const [docBD, setDocDB] = useState([]);
  const finRead = () => {
    const xColeccionConQuery = query (collection(db, 'persona'));
    const unsubcribe =  onSnapshot(xColeccionConQuery,(xDatosBD)  => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        xDoc.push({id:doc.id, ...doc.data()});
      });
      setDocDB(xDoc);
    });
 }

useEffect (()=>{ finRead();  },[props.idActual] );

const [idActual, setIdActual] = useState("");
const fnDelete = async (xId) => {
  if (window.confirm("confirme para eliminar")) {
    await deleteDoc(doc(db, "persona",xId));
  }
  alert("Se elimino con exito...");
}

  return (
    <div style={{background:"greenyellow", padding:"15px"}}>
      <h1>AppList.js </h1>
      <AppForm {...{idActual, setIdActual}} /> {/*envio de las variables*/}
      <h3>Lista de clientes</h3>
      {
        docBD.map((row, index) =>
        <p key={row.id}>
          No. {index +1}. {row.nombre}
          .....
          <span onClick={() => fnDelete(row.id)}>x</span>
          .....
          <span onClick={() => setIdActual(row.id)}>A</span>
        </p>
        )
      }
    </div>
  )
}
export default AppLista;
