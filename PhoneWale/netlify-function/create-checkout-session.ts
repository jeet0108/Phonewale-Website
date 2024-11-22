const stripe = require('stripe')('pk_test_51QO0B605EJeECfFIftzULjA1e23icHLKcstSYWXo20RgTFGKeuSk8CBfPdZtKg3Nl0G7WbHmK29x4rVIz28r7WKh00mwTEuy5y'); // Replace with your secret key

exports.handler = async function (event) {
  try {
    const { amount } = JSON.parse(event.body);

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Product Name' },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://yourdomain.com/success',
      cancel_url: 'https://yourdomain.com/cancel',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};