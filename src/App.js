import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Formulario from "./components/formulario";
import Clima from "./components/clima";
import Error404 from "./components/error404";

function App() {
  const [datos, setDatos] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [xerror, setXerror] = useState(false);

  const { ciudad, pais } = datos;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const API = `206a8987bcb2ad491e7b1a7d6926a33c`;
        const URL = `http://api.openweathermap.org/data/2.5/`;
        const URL_API = `${URL}weather?q=${ciudad},${pais}&appid=${API}`;
        const respuesta = await fetch(URL_API);
        const resultado_API = await respuesta.json();
        setResultado(resultado_API);
        setConsultar(false);

        // detecta si hubo cambios en la consulta
        if (resultado.cod === "404") {
          setXerror(true);
        } else {
          setXerror(false);
        }
      }
    };

    consultarAPI();
  }, [consultar, ciudad, pais, resultado.cod]);

  let componente;

  if (xerror) {
    componente = <Error404 mensaje="No hay Resultados de la ciudad" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Formulario
              datos={datos}
              setDatos={setDatos}
              setConsultar={setConsultar}
            />
          </div>
          <div className="col-lg-6  mt-5">
            <div className="col-12 text-center">
           <h3> Clima </h3>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//  url de api  ojo
//        http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=206a8987bcb2ad491e7b1a7d6926a33c
