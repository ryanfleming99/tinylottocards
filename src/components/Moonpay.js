import { MoonPayBuyWidget } from "@moonpay/moonpay-react";

export default function MoonPay(props) {
  return (
    <MoonPayBuyWidget
      className={props.className}
      variant={props.variant}
      baseCurrencyCode={props.baseCurrencyCode}
      baseCurrencyAmount={props.baseCurrencyAmount}
      defaultCurrencyCode={props.defaultCurrencyCode}
      visible={props.visible}
    />
  );
}
