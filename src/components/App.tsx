import styled from "styled-components"
import React, { useState, useEffect } from "react"
import binanceTrader from "../apis/binanceTrader"
import coingecko from "../apis/coingecko"
import QuantitySelection from "./quantitySelection"
import Assets from "./assets"
import axios from "axios"

const Div = styled.div`
  margin-top: 10rem;
  margin-left: 5rem;
  text-align: center;
  line-height: 3rem;
`

const StyledPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  line-height: 1.1rem;
`
const ButtonDiv = styled.div`
  margin: 1.5rem;
`

const App: React.FC = () => {
  const [ticker, setTicker] = useState("")
  const [quantityPercent, setQuantityPercent] = useState<number>()
  const [side, setSide] = useState("")

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }

  const openPosition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await binanceTrader.post(
      "/openPosition",
      {
        account: "Manoj",
        asset: ticker,
        positionSide: side,
        positionAmount: quantityPercent,
      },
      config
    )
    console.log(`Opened Position for ${ticker}`)
  }

  const closePosition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await binanceTrader.post(
      "/closePosition",
      {
        account: "Manoj",
        asset: ticker,
        positionAmount: quantityPercent,
      },
      config
    )
    console.log(`Closed Position for ${ticker}`)
  }

  const getAsset = (assetSelected: string) => {
    setTicker(assetSelected)
  }

  const getQuantity = (quantitySelected: number) => {
    setQuantityPercent(quantitySelected)
  }

  return (
    <Div className="ui container">
      <h1>The Manual Money Printer</h1>
      <div className="ui segment">
        <form onSubmit={openPosition}>
          <div>
            <StyledPosition>
              <label className="ui ribbon label">Choose Position:</label>
              <select
                className="ui dropdown"
                onChange={(e) => setSide(e.target.value)}>
                <option value="">Select a Position</option>
                <option value="LONG">LONG</option>
                <option value="SHORT">SHORT</option>
              </select>
            </StyledPosition>
            <Assets onAssetChange={getAsset} />
            <QuantitySelection onQuantityChange={getQuantity} />

            <ButtonDiv>
              <button className="ui green button">Open Position</button>
            </ButtonDiv>
          </div>
        </form>
      </div>

      <div className="ui segment">
        <form onSubmit={closePosition}>
          <div>
            <Assets onAssetChange={getAsset} />
            <QuantitySelection onQuantityChange={getQuantity} />
          </div>

          <ButtonDiv>
            <button className="ui red button">Close Position</button>
          </ButtonDiv>
        </form>
      </div>
    </Div>
  )
}

export default App
