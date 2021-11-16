import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function Product({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    reviews,
}) {
    // redux
    const dispatch = useDispatch();

    const addItemToCart = () => {
        // redux - push item into store ('cart')
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            reviews,
        };

        // Sending the product as an action to the REDUX store... the cart slice
        dispatch(addToCart(product));
    };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded xl:h-5/6">
            <p className="absolute top-2 right-2 text-xs text-gray-400">
                {category}
            </p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3 font-semibold">{title}</h4>

            {/* rating stars */}
            <div className="flex">
                {/* rate == 5 ? x :(
                rate == 4 ? x : (
                rate == 3 ? x :
                (x)
                )
                ) */}

                {Math.ceil(rating) === 5 ? (
                    <div className="flex">
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                    </div>
                ) : Math.ceil(rating) === 4 ? (
                    <div className="flex">
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-gray-300" />
                    </div>
                ) : Math.ceil(rating) === 3 ? (
                    <div className="flex">
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-gray-300" />
                        <StarIcon className="h-5 text-gray-300" />
                    </div>
                ) : (
                    <div className="flex">
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-yellow-500" />
                        <StarIcon className="h-5 text-gray-300" />
                        <StarIcon className="h-5 text-gray-300" />
                        <StarIcon className="h-5 text-gray-300" />
                    </div>
                )}

                {/* Product Reviews - * 99 is just to get higher more random number */}
                <p className="text-gray-400 text-sm ml-1">
                    {Intl.NumberFormat("en-US").format(reviews)}
                </p>
            </div>

            <p className="text-xs my-2 line-clamp-2 xl:line-clamp-4">
                {description}
            </p>
            <div className="mb-5 font-semibold">
                <Currency quantity={price} />
            </div>

            <div className="flex items-center space-x-2 -mt-5">
                <img
                    className="w-12"
                    src="https://links.papareact.com/fdw"
                    alt="Prime logo"
                />
                <p className="text-xs text-gray-600 font-semibold">
                    FREE Next-Day Delivery
                </p>
            </div>

            <button onClick={addItemToCart} className="mt-auto button mx-auto">
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
