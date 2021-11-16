import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-4 sm:-mt-24 md:-mt-40 lg:-mt-52 xl:-mt-60 mx-auto pb-96">
            {/* <h1>Products</h1> */}
            {/* {products.map((product) => (
                <p>{product.title}</p>
            ))} */}
            {/* slice here means, show the first 4,  */}
            {products
                .slice(0, 4)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            category={category}
                            description={description}
                            image={image}
                            rating={rating.rate}
                            reviews={rating.count}
                        />
                    )
                )}
            <img
                className="col-span-full"
                src="https://links.papareact.com/dyz"
                alt="ad"
            />
            {products
                .slice(4, 8)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            category={category}
                            description={description}
                            image={image}
                            rating={rating.rate}
                            reviews={rating.count}
                        />
                    )
                )}
            <img
                className="col-span-full"
                src="/images/kindle-ad.jpg"
                alt="ad"
            />

            <div className="sm:col-span-2 xl:col-span-2">
                {products
                    .slice(8, 9)
                    .map(
                        ({
                            id,
                            title,
                            price,
                            description,
                            category,
                            image,
                            rating,
                        }) => (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                                image={image}
                                rating={rating.rate}
                                reviews={rating.count}
                            />
                        )
                    )}
            </div>

            {products
                .slice(10, 14)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            category={category}
                            description={description}
                            image={image}
                            rating={rating.rate}
                            reviews={rating.count}
                        />
                    )
                )}
            <img
                className="col-span-full"
                src="/images/amazon-ad.jpg"
                alt="ad"
            />

            <div className="sm:col-span-2">
                {products
                    .slice(14, 15)
                    .map(
                        ({
                            id,
                            title,
                            price,
                            description,
                            category,
                            image,
                            rating,
                        }) => (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                                image={image}
                                rating={rating.rate}
                                reviews={rating.count}
                            />
                        )
                    )}
            </div>
            {products
                .slice(15, products.length)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            rating={rating.rate}
                            reviews={rating.count}
                        />
                    )
                )}
            {/* Spacer */}
            <div className="h-96 sm:h-0"></div>
            <div className="h-96 sm:h-0"></div>
            <div className="h-0 sm:h-36 "></div>
        </div>
    );
}

export default ProductFeed;
