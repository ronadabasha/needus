import { getCurrencySymbol } from "@/utils/currencySimbol";
import clsx from "clsx";

type Props = {
  price: number;
  currency: string;
  oldPrice?: number;
  showTaxInfo?: boolean;
  priceCustomStyle: string;
  oldPriceCustomStyle?: string;
};

const Price = ({
  price,
  currency,
  oldPrice,
  showTaxInfo,
  priceCustomStyle,
  oldPriceCustomStyle,
}: Props) => {
  const currencySymbol = getCurrencySymbol(currency, "en-US");

  return (
    currencySymbol && (
      <div>
        {showTaxInfo && (
          <span className="breadcrumb-m md:h5-inter-d">
            {currency.toUpperCase()}(incl. of all taxes)
          </span>
        )}
        <p className={priceCustomStyle}>
          {currencySymbol + price}{" "}
          {oldPrice && (
            <span
              className={clsx(
                "text-[#D9D9D9] line-through",
                oldPriceCustomStyle
              )}
            >
              {currencySymbol + oldPrice}
            </span>
          )}
        </p>
      </div>
    )
  );
};

export default Price;
