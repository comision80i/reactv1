/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";

const ListaTareas = ({ tareas, setTareas }) => {
  //console.log("PROPS-->", props);
  //const {tareas}=props;
//console.log("TAREAS PROPS-->", tareas);
  const eliminarTarea=(index)=>{
    let nuevasTareas=tareas;
    nuevasTareas.splice(index,1);
   setTareas([...nuevasTareas]);
   localStorage.setItem("task", JSON.stringify([...nuevasTareas]));
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <h3>Lista de Tareas a realizar</h3>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              console.log("DESDE EL BOTON ELIMINAR TODO");
              setTareas([]);
              localStorage.setItem("task", JSON.stringify([]));
            }}
          >
            Eliminar todas las tareas
          </Button>
        </div>
        <ol>
          {tareas.map((elemento, index) => {
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

export default ListaTareas;
