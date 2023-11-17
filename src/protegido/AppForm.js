import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import {db} from "../conexion/firebase";

const AppForm = (props) => {
  ////////////////////////////Manejar ingresos de datos ////////////////
    const handleStatusChange = (e) => {
    const{name, value} =  e.target;
    setObjeto({...objeto, [name]:value}); 
 console.log({objeto});
    
}

////// GUARDAR Y ACTUALIZAR //////
      const camposRegistro = {nombre:"", edad:"", genero:""};
      const [objeto, setObjeto] = useState (camposRegistro);

      const handleSubmit =  (e) => { // MANEJADOR DE SUBMIT 
            e.preventDefault();
            try {
                if(props.idActual == ""){
                  if(validarForm()){
                    addDoc(collection(db,'persona'), objeto);
                    alert("Se registro con exito...");
                }else {
                console.log("No se guardo...");
              }
               } else{
                alert("Se actualizo el registro...");
              }
            } catch (error) {
              console.log("Error en crear o actualizar",error);
            }
      }
      const validarForm = () => {
        if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
         
        }  
        return true;
       }
 
  return(
        <div style={{background:"orange", paddingq:"10px"}}>
        <form onSubmit={handleSubmit}>
        <button>Cerrar Aplicacion</button>
        <h2>Registrar (AppForm.js)</h2>
        <input  onChange={handleStatusChange}
        name='nombre' type='text' placeholder='Nombres...' /> <br/>
        <input name='edad' type='text' placeholder='Edad...' /> <br/>

        <select onChange={handleStatusChange} name='genero'>
         <option value="">Seleccione genero</option>
         <option value="Masculino">Masculino</option>
         <option value="Femenino">Femenino</option>
        </select> <br/>
        <button>Guardar / Actualizar </button>
        </form>
      </div>
    )
}
export default AppForm;