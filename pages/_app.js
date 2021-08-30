import GlobalStyles from "../components/GlobalStyles";
import { GlobalStateProvider } from "../state/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStateProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </GlobalStateProvider>
    </>
  );
}

export default MyApp;
