// endpoint URL/api/create-checkout-session
// Anything in the api folder is backend node code running on the server, not react code running on the client browser
// Since this code only runs on the server, private keys will not be exposed to the client
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    // raw
    console.log("items", items);
    console.log("email", email);

    // transformed
    // basically the stripe API is expecting product information to match a certain object structure for the
    // api to read
    // here we are reshaping the our (product) "item" into a shape that Stripe API can read and do work on
    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,

                images: [item.image],
            },
        },
    }));

    // all of these parameters are defined in the docs, there are more and they are very customizable
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1JwNtSGwdTmGar6jgiJOUcFU"],
        shipping_address_collection: {
            allowed_countries: ["GB", "US", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        },
    });

    // response from server
    res.status(200).json({ id: session.id });
};
