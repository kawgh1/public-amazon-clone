import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";

// by adding AuthProvider and session={pageProps.session} we gave our whole site access to the authentication state

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
    );
};

export default MyApp;
