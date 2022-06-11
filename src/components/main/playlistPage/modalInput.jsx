import styled from "styled-components"

const ModalInput = props => {
  return (
    <Container className="input-wrapper">
      <label htmlFor={props.name}>{props.name}</label>
      {props.element !== "textarea" ? (
        <input
          id={props.name}
          type={props.type || "text"}
          ref={props.reference}
          value={props.value}
          onKeyDown={props.onKeyDown}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          onChange={event => props.onChange(event.target.value)} />
      ) : (
        <textarea
          id={props.name}
          type={props.type}
          ref={props.reference}
          value={props.value}
          onKeyDown={props.onKeyDown}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          onChange={event => props.onChange(event.target.value)}></textarea>
      )}
    </Container>
  )
}

export default ModalInput

const Container = styled.div`
  position: relative;
  
  label {
    font-size: var(--fs-11);
    position: absolute;
    top: 0;
    left: 1rem;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity .2s;
  }

  &:focus-within label {
    opacity: 1;
  }

  input {
    padding: 0 1.2rem;
    height: 4rem;
  }

  textarea {
    padding: 0.8rem 0.8rem 2.2rem;
    resize: none;

    ::-webkit-scrollbar {
      width: 12px;
      max-height: 50%;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  & :is(input, textarea) {
    background-color: var(--white-op-01);
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100%;
    color: var(--white);
    font-size: var(--fs-14);
    font-family: "Spotify Circular Book";
  }

  & :is(input, textarea):focus {
    background-color: #333;
    border: 1px solid #535353;
    outline: none;
  }
`