import { useState } from "react"
import styled from "styled-components"

const Range = props => {
  const [value, setValue] = useState(0)
  return (
    <Input
      type="range"
      min={0}
      max={100}
      value={value}
      className={value >= 80 ? "positive" : value <= 20 ? "negative" : "normal"}
      onChange={event => setValue(event.target.value)} />
  )
}

export default Range

const makeLongShadow = (color, size) => {
  let i = 4;
  let shadow = `${i}px 0 0 ${size} ${color}`;
  while (i < 706) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    i++
  }

  return shadow;
}

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  height: 12px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 4px;

  // Bolinha
  &::-webkit-slider-thumb {
    appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transform: translateY(calc(-50% + 2px));
    box-shadow: ${makeLongShadow("var(--progress-input-bg)", "-4px")};
  }

  &.positive::-webkit-slider-thumb {
    background-color: var(--white);
  }

  &.normal::-webkit-slider-thumb {
    background: linear-gradient(to right, var(--white), var(--progress-input-bg));
  }

  &.negative::-webkit-slider-thumb {
    background-color: var(--progress-input-bg);
  }

  // Barra
  &::-webkit-slider-runnable-track {
    appearance: none;
    height: 4px;
    border-radius: 4px;
    background-color: var(--white);
    overflow: hidden;
  }

  &:hover {
    &::-webkit-slider-thumb {
      background: var(--white);
    }

    &::-webkit-slider-runnable-track {
      background: var(--active-progress-bar);
      overflow: visible;
    }
  }
`