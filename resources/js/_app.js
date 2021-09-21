import App from 'next/app';
import '../css/globals.css'

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default App
