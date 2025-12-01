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
