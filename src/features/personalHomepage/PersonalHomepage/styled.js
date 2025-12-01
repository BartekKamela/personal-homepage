import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  max-width: 1216px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;