import React, {useState} from "react";
import { Form, Alert } from "react-bootstrap";
import "./formulario.scss";

export default function Formulario({ datos, setDatos, setConsultar }) {

  const [error, setError] = useState(false)

  
  // destructurin de datos
  const { ciudad, pais } = datos;
  

  const cargarDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };


  const enviarDatos = (e) => {
    e.preventDefault();
    if(!ciudad || !pais) {
      setError(true)
      return
    }
    setError(false)
    setConsultar(true)
  }

  return (
    <div className="formulario col-12 mt-5">
      <h3 className="text-center ">Formualario</h3>
      <Form onSubmit={enviarDatos}  >
      {error ? <Xerror/> : null }
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingresar Ciudad"
            name="ciudad"
            value={ciudad}
            onChange={cargarDatos}
          />
        </Form.Group>
          
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>seleccionar Pais</Form.Label>          
          <Form.Control
            as="select"
            onChange={cargarDatos}
            value={pais}
            name="pais"
          >
            <option value="">Selecciona Pais</option>
            <option value="US"> Estados Unidos </option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="ES">Espana</option>
            <option value="PE">Peru</option>
          </Form.Control>
        </Form.Group>
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Buscar Clima"
        />
      </Form>
    </div>
  );
}



function Xerror() {
  return(
    <Alert variant="danger" className="d-flex justify-content-around" >
    <h5 className="m-0 pb-0" >Falta ingresar Datos</h5>
    <img  style={{width: "5%"}}   src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1200px-Feedbin-Icon-error.svg.png" alt="imgs"/>
  </Alert>
  )
} 
