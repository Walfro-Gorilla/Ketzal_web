import { auth } from '../firebase'

async function loginEmail(email, password) {
    const result = await auth.signInWithEmailAndPassword(email, password)
    console.log(result)
    return result;
}

export default loginEmail;