import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Container } from "./styled";

export const PersonalHomepage = () => (
    <Container>
      <ThemeSwitch />
      <MainInformation />
    </Container>
);