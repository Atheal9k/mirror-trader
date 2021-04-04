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
        <option value="">Select Percentage</option>
        <option value="0.05">5%</option>
        <option value="0.1">10%</option>
        <option value="0.15">15%</option>
        <option value="0.2">20%</option>
        <option value="0.25">25%</option>
        <option value="0.3">30%</option>
        <option value="0.35">35%</option>
        <option value="0.4">40%</option>
        <option value="0.45">45%</option>
        <option value="0.5">50%</option>
        <option value="0.55">55%</option>
        <option value="0.6">60%</option>
        <option value="0.65">65%</option>
        <option value="0.7">70%</option>
        <option value="0.75">75%</option>
        <option value="0.8">80%</option>
        <option value="0.85">85%</option>
        <option value="0.9">90%</option>
        <option value="0.95">95%</option>
        <option value="1">100%</option>
      </select>
    </Div>
  )
}

export default QuantitySelection
