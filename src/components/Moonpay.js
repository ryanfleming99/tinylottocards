import dynamic from "next/dynamic";

// Dynamically import MoonPayProvider with SSR disabled
const MoonPayProvider = dynamic(
  () => import("@moonpay/moonpay-react").then(mod => mod.MoonPayProvider),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <MoonPayProvider apiKey={process.env.NEXT_PUBLIC_MOONPAY_PUBLIC_KEY}>
      <Component {...pageProps} />
    </MoonPayProvider>
  );
}
