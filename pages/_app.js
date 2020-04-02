import Bar from "../components/Bar";
import Header from "../components/Header";
import "../sass/styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div className="container">
            <Header />
            <div className="Main">
                <Component {...pageProps} />
            </div>
            <Bar />
        </div>
    );
}
