import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    reviews,
}) {
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(
            addToCart({
                id,
                title,
                price,
                rating,
                description,
                category,
                image,
                reviews,
            })
        );
    };

    const removeItemFromCart = () => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <div className="flex flex-col items-center sm:grid sm:grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
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

                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <Currency quantity={price} />

                <div className="flex items-center space-x-2">
                    <img
                        className="w-12"
                        src="https://links.papareact.com/fdw"
                        alt="ad"
                    />
                    <p className="text-xs text-gray-500">
                        FREE Next-day Delivery
                    </p>
                </div>
            </div>

            {/* Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="checkout-button" onClick={addItemToCart}>
                    Add to Cart
                </button>
                <button
                    className="checkout-button"
                    onClick={removeItemFromCart}
                >
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
