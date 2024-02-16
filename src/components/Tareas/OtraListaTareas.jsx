/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const OtraListaTareas = ({ tareas, setTareas }) => {
  //console.log("PROPS-->", props);
  //const {tareas}=props;
  const [task, setTask]=useState([]);
//EFECTO SOLO EN EL MONTAJE
/*useEffect(()=>{
console.log("Efecto desde el montaje del componente");
},[]);  */

//EFECTO CON ACTUALIZACIONES
useEffect(()=>{    
    console.log("Desde Efecto de Actualizacion de Tareas-->", tareas);
    setTask(tareas);
},[tareas])
//console.log("TAREAS PROPS-->", tareas);
  const eliminarTarea=(index)=>{
    let nuevasTareas=tareas;
    nuevasTareas.splice(index,1);
   setTareas([...nuevasTareas]);
  };

  return (
    <div className="border border-2 border-danger">
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3> Otra sLista de Tareas a realizar</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              console.log("DESDE EL BOTON ELIMINAR TODO");
              setTareas([]);
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>
        <ol>
          {task.map((elemento, index) => {
            return (
              <div key={index} className="my-2">
                <li>
                  <div className="d-flex justify-content-between">
                    <p>Tarea: {elemento}</p>
                    <Button type="button" variant="warning" onClick={()=>{
                        console.log("Desde el boton realizado correspondiente a la tarea:", index);
                        eliminarTarea(index);
                    }}>
                      Realizado
                    </Button>
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default OtraListaTareas;