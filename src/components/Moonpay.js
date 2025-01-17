import dynamic from "next/dynamic";

const MoonPayBuyWidget = dynamic(
  () => import("@moonpay/moonpay-react").then(mod => mod.MoonPayBuyWidget),
  { ssr: false } // Disable server-side rendering
);

export default function MoonPay(props) {
  const publicKey = process.env.NEXT_PUBLIC_MOONPAY_PUBLIC_KEY;

  return (
    <MoonPayBuyWidget
      className={props.className}
      variant={props.variant}
      baseCurrencyCode={props.baseCurrencyCode}
      baseCurrencyAmount={props.baseCurrencyAmount}
      defaultCurrencyCode={props.defaultCurrencyCode}
      visible={props.visible}
      apiKey={publicKey}
    />
  );
}
