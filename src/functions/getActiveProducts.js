import { firebase } from "../firebase";
import { collection, getDocs, query, where  } from 'firebase/firestore/lite';


const db = firebase.firestore();

export default async function () {

    const collectionRef = collection(db, "products");

    // const filtrarActivos = query(collectionRef, where("active", "==", true));    
    // const snaps = await getDocs(filtrarActivos);
    // const productos = [];

    // for await (const snap of snaps.docs) {

    //     const producto = snap.data();
    //     producto.id = snap.id;
    //     const precioSnaps = await getDocs(collection(snap.ref, "prices"));
    //     producto.price = precioSnaps.docs[0].data();
    //     productos.push(producto);

    // }

    // console.log(productos)
}
