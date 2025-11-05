import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const CheckoutForm = ({ totalPrice, cart, axiosSecure }) => {

    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });
        if (error) {
            setError(error.message);
        }
        else if (paymentIntent && paymentIntent.status === "succeeded") {
            setSuccess(" Payment successful! Thank you.");
            console.log(paymentIntent);

            // send payment info to the database
            const payment = {
                email: user.email,
                price: totalPrice,
                date: new Date(),
                cartIds: cart.map(item => item._id),
                menuItemId: cart.map(item => item.menuId),
                status: 'pending'
            }
             const res = await axiosSecure.post('/payments', payment);
             console.log('payment saved', res.data)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement></PaymentElement>
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-600 font-semibold">{success}</p>}
        </form>
    );
};

export default CheckoutForm;