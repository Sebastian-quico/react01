import React, { useEffect, useState } from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';


const AppLista = (props) => { 
////////////////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    const unsubcribe = onSnapshot(xColeccionConQuery,(xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        xDoc.push({id:doc.id, ...doc.data()});
      }); 
      setDocBD(xDoc);
    });
    
  }

  useEffect(() => { fnRead(); }, [props. idActual]);
  console.log(docBD);

  //////DELETE////////

  const [idActual, setIdActual] = useState("");
  const fnDelete = async (xId) => {
    alert("Se elimino con exito ...");
  }


  return (
    <div style={{background:"greenyellow", padding:"15px"}}>
      <h1>AppList.js</h1>
      <AppForm {...{idActual, setIdActual}} />
      <h3>Lista de clientes</h3>
      {
        docBD.map((row, index) => 
        <p key={row.id}>
          No. {index + 1}. {row.nombre} 
          ..... 
          <span onClick={()=> fnDelete(row.id)}>X</span> 
          .....
          <span onClick={()=> setIdActual(row.id)}>A</span>
          A
        </p>)
      }
      <p>No. 1. Juan Manuel Ticona Vega ..... X ..... A</p>
      <p>No. 2. Rosa Maria Luque Conde ..... X ..... A</p>
      <p>No. 3. Joe Ricardo Lopez Moral ..... X ..... A</p>


    </div>
  )
}
export default AppLista;