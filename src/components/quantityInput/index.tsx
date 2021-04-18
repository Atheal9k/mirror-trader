import React, { useState } from "react"
import styled from "styled-components"

interface Props {
  onQuantityChange: (quantitySelected: number) => void
}

const QuantityInput: React.FC<Props> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(0)

  const submitQuantity = (e: any) => {
    setQuantity(e.target.value)
    onQuantityChange(e.target.value)
  }
  return (
    <div className="ui right labeled input">
      <label
        htmlFor="amount"
        className="ui label"
        style={{ backgroundColor: "#0b294d", color: "white" }}>
        $
      </label>
      <input
        type="number"
        min="5"
        step="1"
        placeholder="Enter USD Amount"
        onChange={submitQuantity}
        value={quantity}
        id="amount"
        required
        style={{ backgroundColor: "#0b294d", color: "white" }}
      />
      <div
        className="ui basic label"
        style={{ backgroundColor: "#0b294d", color: "white" }}>
        .00
      </div>
    </div>
  )
}

export default QuantityInput
