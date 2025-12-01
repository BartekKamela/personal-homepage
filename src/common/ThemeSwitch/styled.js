import styled, { css } from 'styled-components';
import { ReactComponent as SunIcon} from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
}
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  border: 1px solid;
  border-radius: 15px;
  padding: 3px;
  background: ${({ theme }) => theme.colors.boxBackground};
`;

export const IconWrapper = styled.span`
  display: flex;
  padding: 3px;
  border-radius: 50%;
  background: currentColor;
  transition: transform 0.3s;

  ${({ moveToRight }) => moveToRight && css`
    transform: translateX(20px);
  `}

`;

export const Icon = styled(SunIcon)`
  color: white;
  height: 14px;
  width: 14px;
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
