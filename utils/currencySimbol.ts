export function getCurrencySymbol(currency:string,local: string) {
    const formatter = new Intl.NumberFormat(local, {
      style: "currency",
      currency,
    });

    let symbol;
    formatter.formatToParts(0).forEach(({ type, value }) => {
      if (type === "currency") {
        symbol = value;
      }
    });

    return symbol;
  };