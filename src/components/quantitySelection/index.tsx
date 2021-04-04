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
  onQuantityChange: (quantitySelected: number) => void
}

const QuantitySelection: React.FC<Props> = ({ onQuantityChange }) => {
  const PercentageList = [
    {
      frontEndValue: "Select Percentage",
      backEndValue: "0",
    },
    {
      frontEndValue: "5%",
      backEndValue: "0.05",
    },
    {
      frontEndValue: "10%",
      backEndValue: "0.1",
    },
    {
      frontEndValue: "15%",
      backEndValue: "0.15",
    },
    {
      frontEndValue: "20%",
      backEndValue: "0.2",
    },
    {
      frontEndValue: "25%",
      backEndValue: "0.25",
    },
    {
      frontEndValue: "30%",
      backEndValue: "0.3",
    },
    {
      frontEndValue: "35%",
      backEndValue: "0.35",
    },
    {
      frontEndValue: "40%",
      backEndValue: "0.4",
    },
    {
      frontEndValue: "45%",
      backEndValue: "0.45",
    },
    {
      frontEndValue: "50%",
      backEndValue: "0.5",
    },
    {
      frontEndValue: "55%",
      backEndValue: "0.55",
    },
    {
      frontEndValue: "60%",
      backEndValue: "0.6",
    },
    {
      frontEndValue: "65%",
      backEndValue: "0.65",
    },
    {
      frontEndValue: "70%",
      backEndValue: "0.7",
    },
    {
      frontEndValue: "75%",
      backEndValue: "0.75",
    },
    {
      frontEndValue: "80%",
      backEndValue: "0.80",
    },
    {
      frontEndValue: "85%",
      backEndValue: "0.85",
    },
    {
      frontEndValue: "90%",
      backEndValue: "0.9",
    },
    {
      frontEndValue: "95%",
      backEndValue: "0.95",
    },
    {
      frontEndValue: "100%",
      backEndValue: "1",
    },
  ]

  const [quantity, setQuantity] = useState<number>(0)

  const submitQuantity = (e: any) => {
    setQuantity(e.target.value)
    onQuantityChange(e.target.value)
  }

  return (
    <Div>
      <label className="ui ribbon label">Quantity Percent:</label>
      <select
        className="ui dropdown"
        onChange={submitQuantity}
        name="SelectedQuantity"
        value={quantity}
        required>
        {PercentageList.map((theList: any) => (
          <option value={theList.backEndValue} key={theList.backEndValue}>
            {theList.frontEndValue}
          </option>
        ))}
      </select>
    </Div>
  )
}

export default QuantitySelection
