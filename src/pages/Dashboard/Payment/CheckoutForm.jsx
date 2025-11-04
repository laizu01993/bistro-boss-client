import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
     const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/payment-success",
            }
        });
        if(error){
            setError(error.message);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement></PaymentElement>
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
};

export default CheckoutForm;