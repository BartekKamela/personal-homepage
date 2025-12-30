import { DangerIcon } from "../../../../../common/icons/DangerIcon";
import { Wrapper, Title, Message, StyledLink } from "./styled";

export const ErrorPage = () => (
  <Wrapper>
    <DangerIcon />
    <Title>Ooops! Something went wrong...</Title>
    <Message>
      Sorry, there was a problem with fetching
      <br />
      your GitHub repositories.
      <br />
      You can check them directly on GitHub.
    </Message>
    <StyledLink
      href="https://github.com/BartekKamela"
      target="_blank"
      rel="noreferrer"
    >
      Go to GitHub
    </StyledLink>
  </Wrapper>
);

export default ErrorPage;