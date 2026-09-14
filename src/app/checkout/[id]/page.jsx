import CheckoutForm from '@/components/forms/CheckoutForm';
import React from 'react';

const CheckoutPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/service/${id}`)
    const {service} = await res.json();
    return (
        <div>
            <CheckoutForm service={service} />
        </div>
    );
};

export default CheckoutPage;