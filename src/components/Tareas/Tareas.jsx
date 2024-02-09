import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const Tareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  console.log(tareas);
  return (
    <div>
      <div className="container my-5 py-5 d-flex justify-content-center">
        <Form>
          <Form.Group>
            <Form.Label>Ingrese la tarea a agendar</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                console.log(e.currentTarget.value);
                setTarea(e.currentTarget.value);
              }}
            />
          </Form.Group>

          <Button
            type="button"
            variant="primary"
            className="my-3"
            onClick={() => {
              setTareas([...tareas, tarea]);
            }}
          >
            Guardar Tarea
          </Button>
        </Form>
      </div>

      <div className="container">
        <h3>Lista de Tareas a realizar</h3>
        <ol>
          {tareas.map((elemento, index) => {
            return (
              <div key={index}>
                <li className="">Tarea: {elemento}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Tareas;
