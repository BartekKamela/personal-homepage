import { Header, Section, List, Item, Bullet } from  './styled';

export const Skills = ({ title, skills }) => {
  return (
      <Section>
        <Header>
          {title}
        </Header>
        <List>
            {skills.map(skill => (
              <Item key={skill}>
                <Bullet />
                {skill}
              </Item>
            ))}
        </List>
      </Section>
  )
};