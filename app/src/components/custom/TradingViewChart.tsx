"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    TradingView: any
  }
}

const TradingViewChart = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NEARUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#FFFFFF",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: container.current.id,
          studies: [],
          hide_side_toolbar: false,
          details: true,
          hotlist: true,
          calendar: true,
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          height: 400,
          hide_volume: false,
          withdateranges: true,
          range: "12M",
          enabled_features: ["header_widget"],
          disabled_features: [
            "header_symbol_search",
            "use_localstorage_for_settings",
          ],
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <div id="tradingview_chart" ref={container} className="h-[400px] w-full" />
}

export default TradingViewChart;