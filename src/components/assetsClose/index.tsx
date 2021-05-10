import React, { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  line-height: 1.1rem;
`

interface Props {
  onAssetChange: (assetSelectedClose: string) => void
}

interface ListObject {
  tickerName?: string
  pairId?: string
  color?: any
}

const AssetsClose: React.FC<Props> = ({ onAssetChange }) => {
  const [ticker, setTicker] = useState("")

  const AssetList = [
    {
      tickerName: "THETA",
      pairId: "THETAUSDT",
      color: "#339933",
    },
    {
      tickerName: "ADA",
      pairId: "ADAUSDT",
      color: "#339933",
    },
    {
      tickerName: "AAVE",
      pairId: "AAVEUSDT",
      color: "#339933",
    },
    {
      tickerName: "IOTA",
      pairId: "IOTAUSDT",
      color: "#339933",
    },
    // {
    //   tickerName: "BNB",
    //   pairId: "BNBUSDT",
    //   color: "#339933",
    // },
    // {
    //   tickerName: "UNI",
    //   pairId: "UNIUSDT",
    //   color: "#339933",
    // },
    // {
    //   tickerName: "ETH",
    //   pairId: "ETHUSDT",
    //   color: "#ff9900",
    // },
    {
      tickerName: "1INCH",
      pairId: "1INCHUSDT",
      color: "#ff9900",
    },
    // {
    //   tickerName: "BTC",
    //   pairId: "BTCUSDT",
    //   color: "#ff9900",
    // },
    // {
    //   tickerName: "MKR",
    //   pairId: "MKRUSDT",
    //   color: "#ff9900",
    // },
    {
      tickerName: "RSR",
      pairId: "RSRUSDT",
      color: "#ff9900",
    },
    {
      tickerName: "XRP",
      pairId: "XRPUSDT",
      color: "#ff9900",
    },
    {
      tickerName: "VET",
      pairId: "VETUSDT",
      color: "white",
    },
    // {
    //   tickerName: "SUSHI",
    //   pairId: "SUSHIUSDT",
    //   color: "#3399ff",
    // },
    // {
    //   tickerName: "SAND",
    //   pairId: "SANDUSDT",
    //   color: "#3399ff",
    // },
    // {
    //   tickerName: "LRC",
    //   pairId: "LRCUSDT",
    //   color: "#3399ff",
    // },
    {
      tickerName: "TRX",
      pairId: "TRXUSDT",
      color: "#3399ff",
    },
    // {
    //   tickerName: "FIL",
    //   pairId: "FILUSDT",
    //   color: "#9933ff",
    // },
    // {
    //   tickerName: "DOT",
    //   pairId: "DOTUSDT",
    //   color: "#9933ff",
    // },
    // {
    //   tickerName: "XLM",
    //   pairId: "XLMUSDT",
    //   color: "#9933ff",
    // },
    {
      tickerName: "LUNA",
      pairId: "LUNAUSDT",
      color: "#9933ff",
    },
    // {
    //   tickerName: "LINK",
    //   pairId: "LINKUSDT",
    //   color: "#9933ff",
    // },
    // {
    //   tickerName: "LTC",
    //   pairId: "LTCUSDT",
    //   color: "#9933ff",
    // },
    {
      tickerName: "DOGE",
      pairId: "DOGEUSDT",
      color: "#9933ff",
    },
  ]

  const submitAsset = (e: any) => {
    setTicker(e.target.value)
    onAssetChange(e.target.value)
  }

  return (
    <Div>
      <label className="ui ribbon label">Choose Asset:</label>
      <select
        className="ui compact selection dropdown"
        onChange={submitAsset}
        value={ticker}
        name="SelectedAsset"
        required
        style={{ backgroundColor: "#0b294d", color: "white" }}>
        {AssetList.map((theList: ListObject) => (
          <option
            value={theList.pairId}
            key={theList.tickerName}
            style={{ color: `${theList.color}` }}>
            {theList.tickerName}
          </option>
        ))}
        <option value="" selected disabled hidden>
          Select an Asset
        </option>
      </select>
    </Div>
  )
}

export default AssetsClose
