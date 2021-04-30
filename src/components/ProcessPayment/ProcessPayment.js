import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeBiOChg3JiHAENOcMN0w0yMpfX2dYRaaBYDK0Vypa5mMBxcb98CFI04dNKNJjpDBeBLkZqUyV9HZ8eDFYcwg6400f3BgMu2G');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;