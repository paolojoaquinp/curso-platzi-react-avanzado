import styled from 'styled-components';

export const Button = styled.button`
  background-image: linear-gradient(to right, rgb(191, 59, 153), rgb(241, 134, 59));
  border-radius: 25px;
  color: #fff;
  padding: 10px 20px;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`