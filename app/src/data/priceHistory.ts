// Generate 365 days of price history
const generatePriceHistory = (
  startPrice: number,
  volatility: number,
  volumeBase: number
) => {
  const history = [];
  let currentPrice = startPrice;
  const now = new Date();

  for (let i = 365; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Generate random price movement
    const change = (Math.random() - 0.5) * volatility;
    currentPrice = currentPrice * (1 + change);
    
    // Ensure price doesn't go below 1
    currentPrice = Math.max(currentPrice, 1);

    // Generate daily OHLC data with more realistic variations
    const open = currentPrice;
    const high = open * (1 + (Math.random() * 0.02)); // Up to 2% higher
    const low = open * (1 - (Math.random() * 0.02));  // Up to 2% lower
    const close = open * (1 + ((Math.random() - 0.5) * 0.015)); // ±1.5% from open
    
    // Generate volume with some randomness
    const volume = Math.floor(volumeBase * (0.5 + Math.random()));

    // Convert date to Unix timestamp in milliseconds
    const timestamp = Math.floor(date.getTime());

    history.push({
      time: timestamp,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: volume
    });
  }

  return history;
};

// Generate price history for different tokens with more realistic parameters
export const priceHistoryData = {
  AIRD: generatePriceHistory(156.78, 0.03, 25000), // Starting from current price
  WIF: generatePriceHistory(89.45, 0.025, 15000),  // Starting from current price
  CTD: generatePriceHistory(120.35, 0.035, 30000), // Starting from current price
  DGI: generatePriceHistory(98.67, 0.028, 20000),  // Starting from current price
};

export type PriceHistoryType = typeof priceHistoryData; 