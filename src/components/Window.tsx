import styled from 'styled-components';

export const Window = styled.div`
  background: var(--win98-gray);
  border: 2px solid #fff;
  border-right-color: var(--win98-gray-dark);
  border-bottom-color: var(--win98-gray-dark);
  box-shadow: 1px 1px 0 0 #000;
  min-width: 200px;
  position: absolute;
`;

export const WindowHeader = styled.div`
  background: var(--win98-blue);
  color: white;
  padding: 3px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WindowContent = styled.div`
  padding: 10px;
  background: var(--win98-gray);
`;

export const CloseButton = styled.button`
  background: var(--win98-gray);
  border: 1px solid #000;
  width: 16px;
  height: 14px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    border: 1px solid var(--win98-gray-dark);
  }
`;