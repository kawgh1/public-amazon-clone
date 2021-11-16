module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"],
    },
    env: { stripe_public_key: process.env.STRIPE_PUBLIC_KEY },
};

// Only put public keys in next.config - NO PRIVATE KEYS
