import styled from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
  //max-width: 1098px;
  //height: 384px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
}
`;

export const Photo = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
`;

export const Intro = styled.div`
  height: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Name = styled.h1`
  letter-spacing: 5%;
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const Content = styled.p`
  letter-spacing: 5%;
  font-size: 20px;
  font-weight: 400;
`;
