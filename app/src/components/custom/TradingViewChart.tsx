import { useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeContext"

declare global {
  interface Window {
    TradingView: any
  }
}

interface PriceData {
  time: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

const TradingViewChart: React.FC<{
  symbol?: string
  priceHistory?: PriceData[]
}> = ({ symbol = "NEARUSDT", priceHistory }) => {
  const container = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      if (container.current) {
        const isMobile = window.innerWidth < 768

        // Create datafeed for custom price data
        const datafeed = {
          onReady: (callback: any) => {
            callback({
              supported_resolutions: ["1D", "1W", "1M"],
              exchanges: [{ value: "Custom", name: "Custom", desc: "Custom Exchange" }],
              symbols_types: [{ name: "crypto", value: "crypto" }],
            })
          },
          resolveSymbol: (symbolName: string, onSymbolResolvedCallback: any) => {
            onSymbolResolvedCallback({
              name: symbol,
              description: symbol,
              type: "crypto",
              session: "24x7",
              timezone: "Etc/UTC",
              exchange: "Custom",
              minmov: 1,
              pricescale: 100,
              has_intraday: true,
              supported_resolutions: ["1D", "1W", "1M"],
              volume_precision: 8,
              data_status: "streaming",
            })
          },
          getBars: (symbolInfo: any, resolution: string, from: number, to: number, onHistoryCallback: any) => {
            if (priceHistory && priceHistory.length > 0) {
              const bars = priceHistory.map(price => ({
                time: new Date(price.time).getTime(),
                open: price.open,
                high: price.high,
                low: price.low,
                close: price.close,
                volume: price.volume
              }))
              onHistoryCallback(bars, { noData: false })
            } else {
              onHistoryCallback([], { noData: true })
            }
          },
          subscribeBars: () => {},
          unsubscribeBars: () => {}
        }
        
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: theme,
          style: "1",
          locale: "en",
          toolbar_bg: "transparent",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: container.current.id,
          studies: [],
          hide_side_toolbar: isMobile,
          show_popup_button: !isMobile,
          popup_width: "1000",
          popup_height: "650",
          hide_volume: false,
          withdateranges: true,
          range: "12M",
          disabled_features: [
            "header_symbol_search",
            "use_localstorage_for_settings",
            ...(isMobile ? [
              "left_toolbar",
              "header_widget",
              "timeframes_toolbar",
              "volume_force_overlay"
            ] : [])
          ],
          ...(priceHistory ? { datafeed } : {})
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [theme, symbol, priceHistory])

  return (
    <div 
      id="tradingview_chart" 
      ref={container} 
      className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[600px]" 
    />
  )
}

export default TradingViewChart;