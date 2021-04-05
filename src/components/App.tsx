import styled from "styled-components"
import React, { useState, useEffect } from "react"
import binanceTrader from "../apis/binanceTrader"
import QuantitySelection from "./quantitySelection"
import Assets from "./assets"

const Div = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  padding: 2.5rem;
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
  const [loading, setLoading] = useState(false)
  const [messageLogOpen, setMessageLogOpen] = useState("")
  const [messageLogClose, setMessageLogClose] = useState("")
  const [showMessageOpen, setShowMessageOpen] = useState(false)
  const [showMessageClose, setShowMessageClose] = useState(false)

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }

  const openPosition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setShowMessageOpen(false)
      setShowMessageClose(false)
      setMessageLogOpen("")
      setMessageLogClose("")
      setLoading(true)
      let log = await binanceTrader.post(
        "/openPosition",
        {
          account: "Manoj",
          asset: ticker,
          positionSide: side,
          positionAmount: quantityPercent,
        },
        config
      )
      setLoading(false)
      setMessageLogOpen(
        `Submitted open order for ${
          quantityPercent ? quantityPercent * 100 : quantityPercent
        }% ${side} for ${ticker}!`
      )
      setShowMessageOpen(true)
      console.log(`Opened Position for ${ticker}`)
    } catch (err) {
      setLoading(false)
      console.log(err)
      setMessageLogOpen("Position was not opened")
      setShowMessageOpen(true)
    }
  }

  const closePosition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setShowMessageOpen(false)
      setShowMessageClose(false)
      setMessageLogClose("")
      setMessageLogOpen("")
      setLoading(true)
      await binanceTrader.post(
        "/closePosition",
        {
          account: "Manoj",
          asset: ticker,
          positionAmount: quantityPercent,
        },
        config
      )
      setLoading(false)
      setMessageLogClose(
        `Submitted close order of ${
          quantityPercent ? quantityPercent * 100 : quantityPercent
        }% of your position for ${ticker}`
      )
      setShowMessageClose(true)
      console.log(`Submitted Close Position for ${ticker}`)
    } catch (err) {
      setLoading(false)
      console.log(err)
      setMessageLogClose("Position was not closed")
      setShowMessageClose(true)
    }
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
        <h3 className="ui green top attached header">Open Your Position</h3>
        <form onSubmit={openPosition}>
          <div>
            <StyledPosition>
              <label className="ui ribbon label">Choose Position:</label>
              <select
                className="ui compact selection dropdown"
                onChange={(e) => setSide(e.target.value)}
                required>
                <option value="" selected disabled hidden>
                  Select a Position
                </option>
                <option value="LONG">Long</option>
                <option value="SHORT">Short</option>
              </select>
            </StyledPosition>
            <Assets onAssetChange={getAsset} />
            <QuantitySelection onQuantityChange={getQuantity} />
            {loading ? (
              <ButtonDiv>
                <button className="ui green loading button">
                  Submitting...
                </button>
              </ButtonDiv>
            ) : (
              <ButtonDiv>
                <button className="ui green button">Open Position</button>
              </ButtonDiv>
            )}
          </div>
        </form>
        {showMessageOpen ? (
          <div className="ui positive message">
            <div className="header">
              Submitted... Please double check on Binance
            </div>
            <p>{messageLogOpen}</p>
          </div>
        ) : null}
      </div>

      <div className="ui segment">
        <h3 className="ui red top attached header">Close Your Position</h3>
        <form onSubmit={closePosition}>
          <div>
            <Assets onAssetChange={getAsset} />
            <QuantitySelection onQuantityChange={getQuantity} />
          </div>

          {loading ? (
            <ButtonDiv>
              <button className="ui red loading button">Submitting...</button>
            </ButtonDiv>
          ) : (
            <ButtonDiv>
              <button className="ui red button">Close Position</button>
            </ButtonDiv>
          )}
        </form>
        {showMessageClose ? (
          <div className="ui positive message">
            <div className="header">
              Submitted... Please double check on Binance
            </div>
            <p>{messageLogClose}</p>
          </div>
        ) : null}
      </div>
    </Div>
  )
}

export default App
