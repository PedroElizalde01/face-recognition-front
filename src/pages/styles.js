import styled, { keyframes, css } from 'styled-components';

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
  color: var(--text);  
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  background: none;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border: ${props => (props.error ? '1.5px solid var(--error)' : '1.5px solid var(--primary)')};
  border-radius: 5px;
  background-color: var(--background);
  outline: none;
  transition: all ease 0.2s;

  &:hover {
    transform: ${props => (props.disabled ? '' : 'translate(0, -3px)')};
    box-shadow: ${props => (props.disabled ? '' : '0 20px 80px -10px var(--primary)')};
  }

  &:focus {
    border: 1.5px solid var(--accent);
    transform: translate(0, -3px);
    box-shadow: 0 20px 80px -10px var(--accent);
  }

  &.shake {
    animation: ${css`${shakeAnimation} 0.5s ease-in-out`};
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  max-width: 185px;
  width: 185px;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  background-color: ${props => (props.disabled ? 'var(--disabled)' : 'var(--primary)')};
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? '' : 'pointer')};

  &:hover {
    transform: ${props => (props.disabled ? '' : 'translate(0, -3px)')};
    box-shadow: ${props => (props.disabled ? '' : '0 20px 80px -10px var(--primary)')};
  }
`;

export const ButtonContainer = styled.div`
  justify-content: center; 
  align-items: center;
  border-radius: 12px;  
  background:${props => (props.background ? props.background : "none")};
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Image = styled.img`
  cursor:pointer;
  max-width:400px;
  max-height:400px;
`;