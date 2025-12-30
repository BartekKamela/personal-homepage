import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../personalHomepageSlice";
import { Section, Header, StyledGithubIcon, Title, SubTitle } from './styled';

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  if (status === "success") {
    console.log(repositories);
  }

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
    </Section>
  )
}