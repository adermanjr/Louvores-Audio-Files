import styled, { css } from 'styled-components';

export const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

export const Icon = styled.span`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  background: none;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 3rem;
  margin-left: 78%;
  @media (max-width: 600px) {
    margin-left: 75%;
  }
`;

export const Label = styled.label``;

Label.Text = styled.span`
  color: #1e2945;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16%;
  @media (max-width: 800px) {
    left: 7%;
  }
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

export const Input = styled.input`
  background: var(--grayLight);
  color: #1e2945;
  display: block;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--primary);
  
  padding: 16px 16px;
  margin-bottom: 20px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  @media (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;