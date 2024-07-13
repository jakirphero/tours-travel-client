import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOut = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transitionId, setTransitionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [booking, refetch] = useCart();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const totalPrice = booking.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price : totalPrice })
                .then(res => {
                    console.log('client secret', res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('paymentMethod', paymentMethod)
            setError('')
        }

        //confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : card,
                billing_details: {
                    email: user?.email || null,
                    name: user?.displayName || null
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('Trnx id', paymentIntent.id)
                setTransitionId(paymentIntent.id);

                //Now save to database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transitionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    bookingId: booking.map(item => item._id),
                    itemId: booking.map(item=> item.itemId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('save database', res.data);
                refetch();
                if(res.data?.result?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the booking",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }

        }

    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="p-6 border rounded-md shadow-md w-full max-w-md">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                '@media (max-width: 600px)': {
                                    fontSize: '14px',
                                },
                                '@media (min-width: 601px) and (max-width: 1024px)': {
                                    fontSize: '15px',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className="p-3 border rounded-md"
                />
                <button className="btn btn-primary w-full mt-4" disabled={!stripe || !clientSecret}>Pay</button>
                <p className="text-red-500">{error}</p>
                {transitionId && <p className="text-green-600">Transition ID: {transitionId}</p>}
            </form>
        </div>
    );
};

export default CheckOut;
