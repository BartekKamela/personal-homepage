import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../personalHomepageSlice";
import { Section, Header, StyledGithubIcon, Title, SubTitle } from './styled';
import { ErrorPage } from "./ErrorPage";
import { Loader } from './Loader';
import { Content, Tile, TileTitle, TileDescription, LinkWrapper, Link } from './styled';

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorPage />}
      {status === "success" && (
        <Content>
          {repositories.map(({ id, name, description, html_url, homepage }) => (
            <Tile key={id}>
              <TileTitle>{name}</TileTitle>
              <TileDescription>
                {description ||
                  "No description available for this project yet. I will add it soon!"}
              </TileDescription>

              {homepage && (
                <LinkWrapper>
                  <span>Demo:</span>
                  <Link href={homepage} target="_blank" rel="noreferrer">
                    {homepage ? homepage : "No demo available"}
                  </Link>
                </LinkWrapper>
              )}

              <LinkWrapper>
                <span>Code:</span>
                <Link href={html_url} target="_blank" rel="noreferrer">
                  {html_url}
                </Link>
              </LinkWrapper>
            </Tile>
          ))}
        </Content>
      )}
    </Section>
  )
}