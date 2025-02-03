"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    TradingView: any
  }
}

const TradingViewChart: React.FC<{
  symbol?: string
}> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      if (container.current) {
        const isMobile = window.innerWidth < 768 // Define mobile breakpoint
        
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
          hide_side_toolbar: isMobile,
          details: !isMobile,
          hotlist: !isMobile,
          calendar: !isMobile,
          show_popup_button: !isMobile,
          popup_width: "1000",
          popup_height: "650",
          hide_volume: false,
          withdateranges: true,
          range: "12M",
          enabled_features: isMobile ? [] : ["header_widget"],
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
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div 
      id="tradingview_chart" 
      ref={container} 
      className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[600px]" 
    />
  )
}

export default TradingViewChart;