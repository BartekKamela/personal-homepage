import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
  //width: 1216px;
  margin-top: 73px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const Header = styled.header`
  text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
  height: 40px;
  width: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 5%;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5%;
  line-height: 140%;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 6px solid ${({ theme }) => theme.colors.iron};
  border-radius: 4px;
  padding: 56px;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}33;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px;
  }
`;

export const TileTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  transition: color 0.3s ease;
`;

export const TileDescription = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.3s ease;
`;

export const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  font-size: 18px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  border-bottom: 1px solid rgba(3, 102, 214, 0.2);
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;