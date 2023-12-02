import React, { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");

  const cambiarValor = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const guardarClick = (e) => {
  if (!nombre || !apellidoPaterno || !correo || !telefono || !direccion || !codigoPostal || !contrasena || !nacionalidad) {
    alert("Todos los campos marcados con * son obligatorios");
    return;
  }

  const emailRegex = /^\S+@\S+$/i;
  if (!emailRegex.test(correo)) {
    alert("Correo electrónico inválido");
    return;
  }
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/;
  if (!nameRegex.test(nombre)) {
    alert("Nombre inválido, solo se permiten letras y espacios");
    return;
  }

  if (!nameRegex.test(apellidoPaterno)) {
    alert("Apellido Paterno inválido, solo se permiten letras y espacios");
    return;
  }

  if (!nameRegex.test(apellidoMaterno)) {
    alert("Apellido Materno inválido, solo se permiten letras y espacios");
    return;
  }

    const ageRegex = /^\d+$/;
    if (!ageRegex.test(edad) || edad < 1) {
      alert("Edad inválida, debe ser un número entero positivo");
      return;
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(telefono)) {
      alert("Teléfono inválido, debe contener 10 dígitos");
      return;
    }
  
    if (direccion.length < 5) {
      alert("Dirección inválida, debe contener al menos 5 caracteres");
      return;
    }

    const postalCodeRegex = /^\d{5}$/;
    if (!postalCodeRegex.test(codigoPostal)) {
      alert("Código Postal inválido, debe contener 5 dígitos");
      return;
    }
  
    if (contrasena.length < 8) {
      alert("Contraseña inválida, debe contener al menos 8 caracteres");
      return;
    }
  
    if (!nameRegex.test(nacionalidad)) {
      alert("Nacionalidad inválida, solo se permiten letras y espacios");
      return;
    }
    // Realiza acciones con los valores, por ejemplo, imprimirlos en la consola.
    console.log("Nombre:", nombre);
    console.log("Apellido Paterno:", apellidoPaterno);
    console.log("Apellido Materno:", apellidoMaterno);
    console.log("Edad:", edad);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Sexo:", sexo);
    console.log("Dirección:", direccion);
    console.log("Código Postal:", codigoPostal);
    console.log("Contraseña:", contrasena);
    console.log("Nacionalidad:", nacionalidad);
  };

  return (
    <div className="wrapper">
    <div className="App">
      <h1>Formulario de registro</h1>
      <div className="formulario">
        <div className="campo">
          <label>Nombre:</label>
          <input id="nombre" name="nombre" value={nombre} onChange={(e) => cambiarValor(e, setNombre)} />
        </div>
        <div className="campo">
          <label>Apellido Paterno:</label>
          <input id="apellidoPaterno" name="apellidoPaterno" value={apellidoPaterno} onChange={(e) => cambiarValor(e, setApellidoPaterno)} />
        </div>
        <div className="campo">
          <label>Apellido Materno:</label>
          <input id="apellidoMaterno" name="apellidoMaterno" value={apellidoMaterno} onChange={(e) => cambiarValor(e, setApellidoMaterno)} />
        </div>
        <div className="campo">
          <label>Edad:</label>
          <input id="edad" name="edad" value={edad} onChange={(e) => cambiarValor(e, setEdad)} />
        </div>
        <div className="campo">
          <label>Correo:</label>
          <input id="correo" name="correo" value={correo} onChange={(e) => cambiarValor(e, setCorreo)} />
        </div>
        <div className="campo">
          <label>Teléfono:</label>
          <input id="telefono" name="telefono" value={telefono} onChange={(e) => cambiarValor(e, setTelefono)} />
        </div>
        <div className="campo">
          <label>Sexo:</label>
          <input type="radio" id="sexo-masculino" name="sexo" value="Masculino" onChange={(e) => cambiarValor(e, setSexo)} /> Masculino
          <input type="radio" id="sexo-femenino" name="sexo" value="Femenino" onChange={(e) => cambiarValor(e, setSexo)} /> Femenino
        </div>
        <div className="campo">
          <label>Dirección:</label>
          <input id="direccion" name="direccion" value={direccion} onChange={(e) => cambiarValor(e, setDireccion)} />
        </div>
        <div className="campo">
          <label>Código Postal (CP):</label>
          <input id="codigoPostal" name="codigoPostal" value={codigoPostal} onChange={(e) => cambiarValor(e, setCodigoPostal)} />
        </div>
        <div className="campo">
          <label>Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={(e) => cambiarValor(e, setContrasena)} />
        </div>
        <div className="campo">
          <label>Nacionalidad:</label>
          <input id="nacionalidad" name="nacionalidad" value={nacionalidad} onChange={(e) => cambiarValor(e, setNacionalidad)} />
        </div>
      </div>

      <div className="btn-group" onClick={guardarClick}>
            <button type="submit" className="btn-submit">Enviar</button>
            <button type="button" className="btn-cancel">Cancelar</button>
          </div>
    </div>
    </div>
  );
}

export default App;