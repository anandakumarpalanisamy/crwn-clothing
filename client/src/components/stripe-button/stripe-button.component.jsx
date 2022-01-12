import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 1000;
    const publisableKey = 'pk_test_51KGQtqGFU8iT1mJtezOH6qQf5fTs8NVoIhKLvUkUTAdHV5N11618u6wN2gzf4fMyfVJe7EEs1MLWpck8HnnEwF2B008n3P7kYT';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card'
            );
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWM clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisableKey}
        />
    )
}

export default StripeCheckoutButton;
