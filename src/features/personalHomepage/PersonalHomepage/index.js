import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";

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
      <Skills
        title={(
          <>
            What I want to learn next
          </>
        )}
        skills={nextSkills}
      />
      <Portfolio />
    </main>
  </Container>
);