-   ## Amazon clone

    -   based on course by Sonny Sangha
    -   This is a public clone of a private repo I made for the course
    -   There were private files with admin credentials that could not be hidden in a .env file
    -   This is a copy of my private repo with credentials removed, everything else is the same

-   ## Starting Build

    -   "dependencies": {
        -   "@reduxjs/toolkit": "^1.6.2",
        -   "@tailwindcss/line-clamp": "^0.2.2",
        -   "firebase": "^9.3.0",
        -   "firebase-admin": "^10.0.0",
        -   "next": "12.0.3",
        -   "react": "17.0.2",
        -   "react-dom": "17.0.2",
        -   "react-redux": "^7.2.6"
        -   },
    -   "devDependencies": {
        -   "eslint": "7.32.0",
        -   "eslint-config-next": "12.0.3",
        -   "autoprefixer": "^10.4.0",
        -   "postcss": "^8.3.11",
        -   "tailwindcss": "^2.2.19"
        -   }

-   ## Deployment

    -   Deployed with Vercel @ https://next-amazon-clone-eta.vercel.app/

-   ## Stripe Checkout UI Flow

    ![stripe-checkout](https://raw.githubusercontent.com/kawgh1/public-amazon-clone/master/stripe-checkout.png)
    ![checkout-success](https://raw.githubusercontent.com/kawgh1/public-amazon-clone/master/checkout-success.png)
    ![orders-page](https://raw.githubusercontent.com/kawgh1/public-amazon-clone/master/orders-page.png)

-   ## Tools Used

    -   Hero Icons

        -   **npm install @heroicons/react**

    -   ### React Responsive Carousel

        -   **npm install react-responsive-carousal**
        -   must include this import:
        -   import "react-responsive-carousel/lib/styles/carousel.min.css";

    -   FakeStore API

        -   https://fakestoreapi.com/

    -   React Currency Formatter

        -   **npm install react-currency-formatter**

    -   ## Next Auth
    -   **npm install next-auth**

        -   This is an alternative to using Firebase or other Auth system
            -   still uses Firebase but configured by you in NextAuth file
        -   https://next-auth.js.org/
        -   In normal react its just a front end, but with next there is actually a backend and all we need to do to access that is add in the "api" folder in our "pages" folder
        -   api/auth/[...nextauth].js - its weird but that's what it is
        -   Within that file you can set any auth platforms you want, github, facebook, google, whatever
            -   To set up OAuth in Google, have to go to the Google Cloud Platform (not Firebase) and open project, go to API & Services and click "Credentials" then click "OAuth 2.0 Client IDs"
                -   Will see "Authorized Javascript Origins" and "Authorized redirect URIs"
                    -   Under "Authorized Javscript Origins" add 'http://localhost:3000'
                    -   Under "Authorized redirect URIs" add 'http://localhost:3000/api/auth/callback/google' - this redirect URI is given by Google when you click sign-in on NextAuth without having a redirect URI already set up
                    -   Once configured, it will give you the regular Google Sign In screen you get with Firebase Auth
                    -   I imagine you would need to set this authorized redirect up for any Auth service (facebook, Github, etc.)
                    -   **Will need to update to deployed site URL once deployed**

    -   ## Stripe Checkout API

        -   https://stripe.com/docs/payments/checkout
        -   https://stripe.com/docs/checkout/quickstart
        -   **npm install --save stripe**
        -   **npm install @stripe/stripe-js**

    -   ## Stripe CLI

        -   https://stripe.com/docs/stripe-cli
        -   no npm package, since using windows I had to use Scoop to install
        -   https://www.youtube.com/watch?v=DTr2mLY_8gs

        -   once installed, in the VScode terminal type 'stripe login' and allow access to this project from stripe
        -   then in the VScode terminal, type 'stripe listen --forward-to localhost:3000/api/webhook'

            -   this is how to forward Stripe API to use our custom webhook for payment / order processing
            -   _Please note: this key will expire after 90 days, at which point you'll need to re-authenticate._
            -   https://youtu.be/4E0WOUYF-QI?t=4765 - reference
            -   Stripe will send back **Ready! You are using Stripe API Version [2020-08-27]. Your webhook signing secret is whsec_2x8EO09KXasdf9kW4vMKDf5IC1Z9yasdfyD**
            -   Add this signing secret to .env.local file to use as an environment variable

        -   ## Stripe CLI continued

            -   ### Creating the webhook to talk to Stripe API

                -   have to install a package called 'micro'
                    -   **npm install micro**
                -   have to install firebase-admin
                    -   **npm install firebase-admin**
                -   **NOTE** - the webhook is running from the api folder - this means it's running on the server and it's secure - it's running on node.js, not react - that's why we need to install firebase-admin. If we try to run regular firebase on the server in node it's going to freak out
                -   So we will process our orders through this backend webhook **on the server side**
                -   #### The backend node server is NOT talking to firebase through our front end. It's communicating directly to firebase from the backend through firebase-admin, using data supplied from the front end - dont confuse this and think we're handling orders through front end firebase SDK config
                -   https://stripe.com/docs/webhooks

            -   ## Setting up firebase-admin on our api
                -   open firebase console
                -   go to project settings -> service accounts
                -   click 'generate new private key' -> save the file
                    -   it's a JSON file like this - I scrubbed it obviously
                    -   {
                        "type": "service_account",
                        "project_id": "amazon-clone-fake-128123",
                        "private_key_id": "7asdfasdfakekey",
                        "private_key": "-----BEGIN PRIVATE KEY-----\cats1230912hasdflk\n-----END PRIVATE KEY-----\n",
                        "client_email": "firebase-adminsdk-asdf98@fake-amazon-clone-web-app",
                        "client_id": "asdf09809234",
                        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                        "token_uri": "https://oauth2.googleapis.com/token",
                        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h9878tb-blah-blah-blah.gserviceaccount.com"
                        }
                    -   renamed this file to "permissions.json" and added it to our root file folder to call the data from in our api/webhook.js file
                    -   I think ideally this file permissions.json would NOT be exposed to the public because it has private keys - I have created a duplicate public repo that has all the other code but does not include this permissions.json with my firebase-admin credentials

    -   ## Axios

        -   **npm install axios**

    -   ## Orders page
        -   **npm install moment**

-   ## Notes

-   File based routing (NEXT) means index.js ("/") is our homepage

    -   ## White listing images / domains in Next
    -   File: next.config.js

            module.exports = {
                images: {
                    domains: ["links.papareact.com", "fakestoreapi.com"],
                },
            };

        -   if you don't do this, it will error out

-   ## Tailwind classNames

    -   ### flex-grow sm:flex-grow-0

        -   <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    alt="Amazon logo"
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            - the "flex-grow sm:flex-grow-0" className says the default styling is flex grow, but once the screen size is larger than "sm" (sm = mobile device), then set flex-grow to 0 -> no more flex-grow applied
            - You can see this effect by resizing the homepage on desktop

        -   Same effect here on the search bar, default is hidden, but once screen is larger than 'sm' (mobile size), then it displays as 'flex'
        -   {/_ Search _/}
            <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500">
            <input type="text" />
            <SearchIcon className="h-12 p-4" />
            </div>
        -   Currently 'sm' is the smallest default marker in Tailwind CSS at 640px, but it can be customized https://tailwindcss.com/docs/responsive-design

    -   ### grid-flow-row-dense
        -   this means when doing grid-row - fill up all the space, leave no gaps even if the spacing will be off

-   ## Tricks

    -   Extensions
        -   Emmet - javascript: javascriptreact
        -   Auto tag rename - change the opening tag, changes the closing tag automatically

-   ## Things I added
    -   made responsive search bar on mobile
    -   Added conditional styling to add gray stars to yellow star ratings so there are always 5 stars (yellow and gray) and not just 3 or 4 yellow stars
    -   Added Number of Product Reviews from API
    -   Added Footer Component
    -   Added extra ads
