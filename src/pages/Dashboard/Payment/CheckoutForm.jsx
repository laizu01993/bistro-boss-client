import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ totalPrice, cart, axiosSecure, refetch }) => {

    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);
     const [isFormComplete, setIsFormComplete] = useState(false);
     const navigate = useNavigate();
      


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        // disable button during processing
        setProcessing(true);
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });
        if (error) {
            setError(error.message);
            setProcessing(false);
            return;
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
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
            refetch();
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your payment has been processed successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/paymentHistory')
            }
        }
        // re-enable button
        setProcessing(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement  onChange={(event) => setIsFormComplete(event.complete)}></PaymentElement>
            
            <button className="btn btn-sm bg-blue-500 my-4" type="submit" disabled={!stripe || !elements || !isFormComplete || processing}>
                {processing ? "Processing..." : "Pay"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}

        </form>
    );
};

export default CheckoutForm;