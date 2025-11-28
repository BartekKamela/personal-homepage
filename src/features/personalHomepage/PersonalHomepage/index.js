import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { skills } from "./skillsData";

export const PersonalHomepage = () => (
    <Container>
      <ThemeSwitch />
      <MainInformation />
      <main>
        <Skills 
          title={(
            <>
              My skillset includes
            </>
          )}
          skills={skills}
        />
      </main>
    </Container>
);