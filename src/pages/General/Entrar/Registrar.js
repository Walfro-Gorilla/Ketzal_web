import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registrarClienteauth } from "../../../controllers/Sesion"
import "./Registrar.css"

const initFormRegistrar = {
    nombres: "",
    apellidos: "",
    correo: "",
    contrasena: "",
};

const Registrar = (props) => {
    const [formRegistrar, setFormRegistrar] = useState(initFormRegistrar);
    const cambiarDatos = (e) => {
        const { name, value } = e.target;
        setFormRegistrar({
            ...formRegistrar,
            [name]: value,
        });
    };
    const registrar = (e) => {
        e.preventDefault();
        registrarClienteauth(formRegistrar).then((res) => {
            if (res === "Correcto") {
                console.log(
                    "Registrado Corectamente, verifique su correo para validar."
                );
                props.history.push("/gracias-por-registrarte");
            } else if (res === "Repetido") {
                console.log("Este correo ya fue registrado");
                props.history.push("/ingresar");
            } else if (res === "Contrasena") {
                console.log("Contrasena debe ser mayor de 6 digitos");
            }
        });
        setFormRegistrar(initFormRegistrar);
    };

    let publicUrl = process.env.PUBLIC_URL + '/'


    return (
        <>
            <div className="grid-registro">
                <div className="grid-registro-imagen">
                    <img src={publicUrl + "assets/img/icons/menu.svg "} alt={"Hola"} />

                    <div className="contenedor-registro-imagen">
                        <h2>Registrate y VIAJA ahora.</h2>
                        <h3>Wal Aguilar</h3>
                        <p>Wanderlust Jrz</p>
                    </div>
                </div>
                <div className="grid-registro-formulario">
                    <h2>Registrar</h2>
                    <p>mi cuenta con Google o FB</p>
                    <button className="grid-registro-facebook">Facebook</button>
                    <button className="grid-registro-google">Google</button>

                    <form onSubmit={registrar}>
                        <input
                            type="text"
                            required
                            name='nombres'
                            placeholder='Nombres'
                            value={formRegistrar.nombres}
                            onChange={cambiarDatos}
                        />

                        <input
                            type="text"
                            required
                            name='apellidos'
                            placeholder='Apellidos'
                            value={formRegistrar.apellidos}
                            onChange={cambiarDatos}
                        />

                        <input
                            type="text"
                            required
                            name='correo'
                            placeholder='Correo'
                            value={formRegistrar.correo}
                            onChange={cambiarDatos}
                        />

                        <input
                            type="password"
                            required
                            name='contrasena'
                            placeholder='Contraseña'
                            value={formRegistrar.contrasena}
                            onChange={cambiarDatos}
                        />

                        <p>
                            Al registrarte usted autoriza a recibir comunicaciones promocionales
                            y el uso de su informacion para fines adicionales.
                        </p>

                        <p>
                            Tambien declara que leyo y acepto la
                            <Link to="/politica-de-privacidad"> Politica de Privacidad</Link>y
                            los
                            <Link to="/terminos-y-condiciones"> Terminos y Condiciones</Link>
                            de Ketzal app.
                        </p>
                        <input type="submit" value="Registrar" />
                        <p>
                            Tengo una cuenta, quiero
                            <Link to="/ingresar"> Ingresar</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};