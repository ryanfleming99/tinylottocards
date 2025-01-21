import "../styles/main.css";
import { MoonPayProvider } from "@moonpay/moonpay-react";

export default function App({ Component, pageProps }) {
  return (
    <MoonPayProvider apiKey={process.env.NEXT_PUBLIC_MOONPAY_PUBLIC_KEY}>
      <Component {...pageProps} />
    </MoonPayProvider>
  );
}
