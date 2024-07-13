import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_stripe_secret_pk)

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={'payment'} heading={'please payment'}></SectionTitle>
            <div>
                <p className="text-center text-red-500 text-2xl mb-4">Only use card</p>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;