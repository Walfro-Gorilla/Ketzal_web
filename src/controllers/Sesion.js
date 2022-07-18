import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    checkActionCode,
    applyActionCode,
    sigInWithEmailAndPassword,
    verifyPasswordResetCode,
    confirmPasswordReset,
    sendPasswordResetEmail,
    FacebookAuthProvider,
    sigInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const auth = getAuth();
const coleccion = "Clientes";
const coleccionAdministrador = "Personales";

export const registrarCliente = async (formRegistrar, userId) => {
    try {
        await setDoc(doc(db, coleccion, userId), {
            Nombres: formRegistrar.nombres,
            Apellidos: formRegistrar.apellidos,
            Correo: formRegistrar.correo,
            Metodo: "correo",
            Confirmacion: false,
        });
    } catch (e) {
        console.error("Error al registrar ")
    }
}