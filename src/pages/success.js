import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";

function Success() {
    const router = useRouter();
    return (
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center text-center flex-col mb-24">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-3xl font-semibold">
                            Your order has been received!
                        </h1>
                    </div>
                    <div className="flex items-left space-y-1 flex-col mb-12">
                        <h2 className="text-xl">
                            Thank you for shopping with us.
                        </h2>
                        <br />
                        <br />
                        <p>
                            We&apos;ll send you a confirmation email once your
                            order has shipped. <br /> If you would like to check
                            the status of your order(s) please follow the link
                            below.
                        </p>
                    </div>

                    <button
                        onClick={() => router.push("/orders")}
                        className="button mt-8"
                    >
                        Go to My Orders
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Success;
