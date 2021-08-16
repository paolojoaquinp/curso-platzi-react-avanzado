import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px 20px 20px;
  margin: 0px 20px;
  display: flex;
  box-shadow: rgb(0 0 0 / 10%) 0px 16px 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 480px;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(191, 59, 153);
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  outline: none;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 3.2rem;
  padding: 8px 0;
  color: rgb(191, 59, 153);
` 

export const Error = styled.span`
  display: block;
  font-size: 14px;
  color: red;
  text-align: center;
  padding: 8px 0px;
  margin: 10px 0px 10px;
  width: 100%;
  border:dotted 3px #f51165;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-topright:8px;
  -moz-border-radius-bottomleft:8px;
  -moz-border-radius-bottomright:8px;
  -webkit-border-top-left-radius:8px;
  -webkit-border-top-right-radius:8px;
  -webkit-border-bottom-left-radius:8px;
  -webkit-border-bottom-right-radius:8px;
  border-top-left-radius:8px;
  border-top-right-radius:8px;
  border-bottom-left-radius:8px;
  border-bottom-right-radius:8px;
  background-color: rgba(215, 44, 44, 0.3);
  background: rgba(215, 44, 44, 0.3);    
`;

export const Spinner = styled.div`
   @keyframes spin {
     0% {
       transform: rotate(0deg);
     }
   
     100% {
       transform: rotate(360deg);
     }
    
  } 
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  margin:auto;
  animation: spin 1s ease infinite;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;