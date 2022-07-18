import React, { useState } from 'react'
import { auth, db } from '../../../firebase';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)
    const [esRegistro, setEsRegistro] = useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            //console.log('Ingrese email')
            setError('Ingrese email')
            return
        }
        if (!pass.trim()) {
            //console.log('Ingrese Pass')
            setError('Ingrese Password')
            return
        }
        if (pass.length < 6) {
            // console.log('Pass menor a 6 chars')
            setError('Password debe ser mayor a 6 caracteres')

            return
        }
        console.log('Pasando todas las validaciones')
        setError(null)

        if (esRegistro) {
            registrar()
        } else {
            login()
        }
    }

    const login = React.useCallback(async () => {

        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin')
        } catch (error) {
            console.log(error)

            if (error.code === 'auth/invalid-email') {
                setError('Email no valido')
            }
            if (error.code === 'auth/user-not-found') {
                setError('Usuario no encontrado')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Credenciales incorrectas')
            }
        }
    }, [email, pass, props.history])

    const registrar = React.useCallback(async () => {

        try {

            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)

            await db.collection('clcClientes').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid
            })

            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin')

        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('Email no valido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('Email ya esta en uso')
            }


        }

    }, [email, pass, props.history])

    return (
        
        <div >
            <br />
            <br />
            <br />
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro de usuario' : 'Login de acceso'
                }
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input
                            type="email"
                            className='form-control mb-2'
                            placeholder='Ingrese un email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            className='form-control mb-2'
                            placeholder='Ingrese el password'
                            onChange={e => setPass(e.target.value)}
                            value={pass}

                        />
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            {
                                esRegistro ? 'Registrarse' : 'Acceder'
                            }
                        </button>
                        <button
                            className="btn btn-info btn-sm btn-block"
                            onClick={() => setEsRegistro(!esRegistro)}
                            type="button"
                        >

                            {
                                esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'
                            }

                        </button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default withRouter(Login)