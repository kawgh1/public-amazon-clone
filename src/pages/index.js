import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon Clone</title>
            </Head>

            {/* Custom Header */}
            <Header />
            <main className="max-w-screen-2xl mx-auto ">
                {/* Banner */}
                <Banner />
                {/* Product Feed */}
                <ProductFeed products={products} />
            </main>
            <Footer />
        </div>
    );
}

// any time you want to do Server Side Rendering, call this function
// just having this function in this page component tells NextJS this is NOT a static page
// and thus that NextJS needs to render this on the Server first, and then deliver it to client browser

// Ya but what does this mean?
// When I hit the page, ALL the products are loaded instantly, there's no sloppy rendering, just bam BAM!
export async function getServerSideProps(context) {
    // load products on the server as JSON
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    // products get returned to page as 'props' -> Home({products})
    return {
        props: {
            products,
        },
    };
}

// GET >>>> https://fakestoreapi.com/products
