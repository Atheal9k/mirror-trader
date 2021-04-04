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
        <option value="">Select an Asset</option>
        <option value="IOTAUSDT">IOTA</option>
        <option value="AAVEUSDT">AAVE</option>
        <option value="ADAUSDT">ADA</option>
      </select>
    </Div>
  )
}

export default Assets
