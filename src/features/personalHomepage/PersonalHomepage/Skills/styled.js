import styled from "styled-components";
import { ReactComponent as DotIcon} from "./bullet.svg";

export const Section = styled.section`
  width: 1216px;
  height: 404px;
  margin-top: 73px;
  padding: 32px;
  border-radius: ${({ theme }) => theme.boxRadiusSmall};;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.boxBackground};
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
  list-style: unset;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 32px;
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