import { MoonPayBuyWidget } from "@moonpay/moonpay-react";

export default function MoonPay(props) {
  const publicKey = process.env.NEXT_PUBLIC_MOONPAY_PUBLIC_KEY;
  console.log("Public Key:", publicKey);

  console.log(
    "MoonPay Public Key:",
    process.env.NEXT_PUBLIC_MOONPAY_PUBLIC_KEY
  );

  return (
    <MoonPayBuyWidget
      className={props.className}
      variant={props.variant}
      baseCurrencyCode={props.baseCurrencyCode}
      baseCurrencyAmount={props.baseCurrencyAmount}
      defaultCurrencyCode={props.defaultCurrencyCode}
      visible={true}
      apiKey={publicKey} // Dynamically injects public key
    />
  );
}
