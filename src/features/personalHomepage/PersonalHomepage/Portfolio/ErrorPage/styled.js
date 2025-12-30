import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 88px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 16px 0;
`;

export const Message = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accentHover};
  }
`;