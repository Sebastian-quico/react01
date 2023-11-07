import React from 'react'
import AppForm from './AppForm'

const AppLista = (props) => 
{
  return (
    <div style={{background:"greenyellow", padding:"15px"}}>
      <h3>Lista de clientes</h3>
      <AppForm/>
      <p>No. 1. Juan Manuel Ticona Vega ..... x .....A </p>
      <p>No. 1. Sebastian Jukio Umaña Quico ..... x .....A </p>
      <p>No. 1. Joe Ricardo Lopez Conde ..... x .....A </p>
    </div>
  )
}

export default AppLista
