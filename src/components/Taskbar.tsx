import styled from 'styled-components';

export const Taskbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: var(--win98-gray);
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  padding: 2px;
`;

export const StartButton = styled.button`
  height: 22px;
  padding: 0 4px;
  background: var(--win98-gray);
  border: 2px solid #fff;
  border-right-color: var(--win98-gray-dark);
  border-bottom-color: var(--win98-gray-dark);
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;

  &:active {
    border: 2px solid var(--win98-gray-dark);
    border-right-color: #fff;
    border-bottom-color: #fff;
  }
`;