import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
// Stripe
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    // Stripe
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // Call backend api to create checkout session
        const checkoutSession = await axios.post(
            "/api/create-checkout-session",
            {
                items: items,
                email: session.user.email,
            }
        );
        console.log("clicked checkout");

        // Redirect user/customer to Stripe Checkout page
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        height={400}
                        width={1600}
                        objectFit="contain"
                        alt="ad"
                    />
                    <div className="flex flex-col p-5 mx-2 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0
                                ? "Your Shopping Cart is empty."
                                : "Your Shopping Cart"}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                reviews={item.reviews}
                            />
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col bg-white shadow-sm p-10">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} />
                                </span>
                            </h2>
                            <button
                                disabled={!session}
                                role="link"
                                className={`button mt-2 ${
                                    !session &&
                                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                                }`}
                                onClick={createCheckoutSession}
                            >
                                {!session
                                    ? "Sign In to Checkout"
                                    : "Proceed to Checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Checkout;
