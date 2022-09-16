import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../../firebase'


const Reset = (props) => {


    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            //console.log('Ingrese email')
            setError('Ingrese email')
            return
        }
        
        setError(null)

        recuperar()
        
    }

    const recuperar = React.useCallback(async () => {
        try {
            await auth.sendPasswordResetEmail(email)
            console.log('email enviado')     
            
            props.history.push('/login')

        } catch (error) {
            console.log(error)   
            
            if (error.code === 'auth/user-not-found') {
                setError('Email no registrado')
            }
        }
    }, [email, props.history])

    return (
        <div >
            <br />
            <br />
            <br />
            <h3 className="text-center">
                Reiniciar Contraseña
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

                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                        >
                            Reiniciar Contraseña
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Reset)