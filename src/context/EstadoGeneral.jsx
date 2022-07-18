import React, { useReducer, useEffect, createContext } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth, db } from "../firebase"

import "firebase/compat/firestore";

const estadoInicial = {
    usuario: {},
    productos: [],
    sidebar: false,
};

if (localStorage.getItem("IdToken")) {
    const usuarioData = {
        Metodo: localStorage.getItem("Metodo"),
        IdCliente: localStorage.getItem("IdCliente"),
        IdToken: localStorage.getItem("IdToken"),
        Correo: localStorage.getItem("Correo"),
        Nombres: localStorage.getItem("Nombres"),
        Apellidos: localStorage.getItem("Apellidos"),
        Genero: localStorage.getItem("Genero"),
        FechaNacimiento: localStorage.getItem("FechaNacimiento"),
        Celular: localStorage.getItem("Celular"),
        FotoUrl: localStorage.getItem("FotoUrl"),
        Rol: localStorage.getItem("Rol"),
    }
    estadoInicial.usuario = usuarioData;
} else {
    estadoInicial.usuario = {};
}

const EstadoContexto = createContext({
    usuario: {},
    cerrarSesion: () => { },
    iniciarSesion: (usuarioData) => { },
    productos: [],
    sidebar: false,
    cambiarEstadoSidebar: (estado) => { },
});

function estadoReductor(state, action) {
    switch (action.type) {
        case "NUEVA_SESION":
            return {
                ...state,
                usuario: Object.assign(state.usuario, action.payload),
            };
        case "CERRAR_SESION":
            return {
                ...state, usuario: {}
            };
            case "CAMBIAR_ESTADO_SIDEBAR":
                return {
                    ...state, sidebar: action.sidebar 
                }
        default:
            return state;
    }
}

function EstadoProveedor(props) {
    const [state, dispatch] = useReducer(estadoReductor, estadoInicial);

    useEffect(() => {
        if (localStorage.getItem("IdToken")) {
            const rolUsuario = localStorage.getItem("Rol");
            const clienteRef = firebase.doc(
                db,
                `${rolUsuario === "administrador" ? "Personales" : "Clientes"}`,
                localStorage.getItem("IdCliente")
            );
            firebase.onSnapshot(clienteRef, (doc) => {
                if (localStorage.getItem("IdToken") === doc.data().IdToken) {
                    const userData = {
                        Nombres: doc.data().Nombres,
                        Apellidos: doc.data().Apellidos,
                        Genero: doc.data().Genero,
                        FechaNacimiento: doc.data().FechaNacimiento,
                        Celular: doc.data().Celular,
                        FotoUrl: doc.data().FotoUrl,
                    };
                    dispatch({
                        type: "NUEVA_SESION",
                        payload: userData,
                    });
                    localStorage.setItem("Nombres", doc.data().Nombres);
                    localStorage.setItem("Apellidos", doc.data().Apellidos);
                    localStorage.setItem("Genero", doc.data().Genero);
                    localStorage.setItem("FechaNaciemiento", doc.data().FechaNaciemiento);
                    localStorage.setItem("Celular", doc.data().Celular);
                    localStorage.setItem("FotoUrl", doc.data().FotoUrl);
                } else {
                    console.log("NO HAY USUARIO");
                    cerrarSesion();
                }
            });
        }
    }, [state.user]);

    function iniciarSesion(usuarioData) {
        localStorage.getItem("Metodo", usuarioData.Metodo);
        localStorage.getItem("IdCliente", usuarioData.IdCliente);
        localStorage.getItem("IdToken", usuarioData.IdToken);
        localStorage.getItem("Correo", usuarioData.Correo);
        localStorage.getItem("Nombres", usuarioData.Nombres);
        localStorage.getItem("Apellidos", usuarioData.Apellidos);
        localStorage.getItem("Genero", usuarioData.Genero);
        localStorage.getItem("FechaNacimiento", usuarioData.FechaNacimiento);
        localStorage.getItem("Celular", usuarioData.Celular);
        localStorage.getItem("Rol", usuarioData.Rol);

        dispatch({
            type: "NUEVA_SESION",
            payload: usuarioData,
        });
    }

    function cerrarSesion() {
        localStorage.removeItem("Metodo");
        localStorage.removeItem("IdCliente");
        localStorage.removeItem("IdToken");
        localStorage.removeItem("Correo");
        localStorage.removeItem("Nombres");
        localStorage.removeItem("Apellidos");
        localStorage.removeItem("Genero");
        localStorage.removeItem("FechaNacimiento");
        localStorage.removeItem("Celular");
        localStorage.removeItem("FotoUrl");
        localStorage.removeItem("Rol");
        firebase.signOut(auth)
            .then(() => {
                dispatch({
                    type: "CERRAR_SESION",
                    user: {},
                });
            })
            .catch((error) => {
                console.log("Error cerrar sesion: ", error);
            });
    }

    const cambiarEstadoSidebar = (estado) => {
        dispatch({ type: "CAMBIAR_ESTADO_SIDEBAR", sidebar: estado });
    }

    return (
        <EstadoContexto.Provider
            value={{
                usuario: state.usuario,
                cerrarSesion,
                iniciarSesion,
                productos: state.productos,
                sidebar: state.sidebar,
                cambiarEstadoSidebar,
            }}
            {...props}
        />
    );
}

export { EstadoContexto, EstadoProveedor };



