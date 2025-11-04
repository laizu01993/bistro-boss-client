import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {

    const [clientSecret, setClientSecret] = useState("");

    const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

    return (
        <div className="p-6">
            <SectionTitle subHeading={"Please Pay"}
                heading={"Payment"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;