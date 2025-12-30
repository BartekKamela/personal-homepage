import { StyledButton } from "./styled";
import { MailIcon } from "../icons/MailIcon";

export const Button = () => (
  <StyledButton
    as="a"
    href="mailto:bkamela@gmail.com"
    title="Send an email to me"
  >
    <MailIcon />
    Hire Me
  </StyledButton>
);
