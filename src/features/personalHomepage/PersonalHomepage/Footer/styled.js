import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;
  max-width: 691px;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Address = styled.address`
  font-style: normal;
  margin-top: 24px;
`;

export const Email = styled.a`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 24px 0 32px 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const SocialList = styled.div`
  display: flex;
  gap: 24px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    width: 48px;
    height: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      width: 32px;
      height: 32px;
    }
  }
`;