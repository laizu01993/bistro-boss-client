import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {

    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
                .catch((err) => {
                    console.error("Error creating payment intent:", err);
                });
        }
    }, [axiosSecure, totalPrice])


    const appearance = {
        theme: "stripe",
        labels: "floating",
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="p-6">
            <SectionTitle subHeading={"Please Pay"}
                heading={"Payment"}></SectionTitle>
            <div>
                {clientSecret ? (<Elements stripe={stripePromise} options={options}>
                    <CheckoutForm totalPrice={totalPrice}
                        cart={cart}
                        axiosSecure={axiosSecure}
                        refetch={refetch}></CheckoutForm>
                </Elements>
                ) : (
                    <p>Loading Payment</p>
                )}
            </div>
        </div>
    );
};

export default Payment;