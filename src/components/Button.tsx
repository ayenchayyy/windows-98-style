import styled from 'styled-components';

export const Button = styled.button`
  padding: 6px 8px;
  background: var(--win98-gray);
  border: 2px solid #fff;
  border-right-color: var(--win98-gray-dark);
  border-bottom-color: var(--win98-gray-dark);
  box-shadow: 1px 1px 0 0 #000;
  color: #000;
  font-size: 14px;

  &:active {
    border: 2px solid var(--win98-gray-dark);
    border-right-color: #fff;
    border-bottom-color: #fff;
    box-shadow: -1px -1px 0 0 #000;
  }
`;