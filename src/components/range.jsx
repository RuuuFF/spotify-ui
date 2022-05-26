import styled from "styled-components"

const Range = ({ value, max, onChange }) => {
  const moreThan = value >= (max * 90) / 100
  const lowerThan = value <= (max * 10) / 100

  return (
    <Input
      type="range"
      min={0}
      max={max}
      value={value}
      className={moreThan ? "end" : lowerThan ? "start" : "middle"}
      onChange={event => onChange(Number(event.target.value))} />
  )
}

export default Range

const makeLongShadow = (color, size) => {
  let offsetX = 4
  let shadow = `${offsetX}px 0 0 ${size} ${color}`
  while (offsetX < 722) { shadow = `${shadow}, ${offsetX++}px 0 0 ${size} ${color}`; }
  return shadow
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

  &.start::-webkit-slider-thumb {
    background-color: var(--progress-input-bg);
  }

  &.middle::-webkit-slider-thumb {
    background: linear-gradient(to right, var(--white) 50%, var(--progress-input-bg) 50%);
  }

  &.end::-webkit-slider-thumb {
    background-color: var(--white);
  }

  // Barra
  &::-webkit-slider-runnable-track {
    appearance: none;
    height: 4px;
    border-radius: 4px;
    background-color: var(--white);
    overflow: hidden;
  }

  &:is(:hover, :active) {
    &::-webkit-slider-thumb {
      background: var(--white);
    }

    &::-webkit-slider-runnable-track {
      background: var(--active-progress-bar);
      overflow: visible;
    }
  }
`