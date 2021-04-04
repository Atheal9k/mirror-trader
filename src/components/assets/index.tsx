import React, { useState } from "react"
import styled from "styled-components"
import coingecko from "../../apis/coingecko"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  line-height: 1.1rem;
`

interface Props {
  onAssetChange: (assetSelected: string) => void
}

const Assets: React.FC<Props> = ({ onAssetChange }) => {
  const [ticker, setTicker] = useState("")

  const AssetList = [
    {
      tickerName: "IOTA",
      pairId: "IOTAUSDT",
    },
    {
      tickerName: "AAVE",
      pairId: "AAVEUSDT",
    },
    {
      tickerName: "ADA",
      pairId: "ADAUSDT",
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
        className="ui dropdown"
        onChange={submitAsset}
        value={ticker}
        name="SelectedAsset"
        required>
        {AssetList.map((theList: any) => (
          <option value={theList.pairId} key={theList.tickerName}>
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

export default Assets
