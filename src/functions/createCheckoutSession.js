import { db } from "../firebase";

async function createCheckoutSession(uid, cart) {

    db.collection(`customers/${uid}/checkout_sessions`).add({

        mode: "payment",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        line_items: cart.map(item => {
            return {
                quantity: 1,
                price: item.id
            }
        })

    })
}

export default createCheckoutSession;