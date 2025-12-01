import styled from "styled-components";
import { ReactComponent as DotIcon } from "./bullet.svg";

export const Section = styled.section`
  margin-top: 73px;
  padding: 32px;
  border-radius: ${({ theme }) => theme.boxRadiusSmall};;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.boxBackground};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const Header = styled.h2`
  margin: 0px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 5%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const Item = styled.li`
  display: flex;
  padding-bottom: 8px;
`;

export const Bullet = styled(DotIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
  height: auto;
`;